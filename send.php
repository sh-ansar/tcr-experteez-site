<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, bool $success, string $message): never {
    http_response_code($status);
    echo json_encode(['success' => $success, 'message' => $message], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, false, 'Method not allowed.');
}

// Honeypot: legitimate users never fill this field.
if (trim((string)($_POST['website'] ?? '')) !== '') {
    respond(200, true, 'Request accepted.');
}

$startedAt = filter_var($_POST['started_at'] ?? null, FILTER_VALIDATE_INT);
if (!$startedAt || ((int)round(microtime(true) * 1000) - $startedAt) < 2500) {
    respond(400, false, 'Please wait a moment and try again.');
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateDir = rtrim(sys_get_temp_dir(), DIRECTORY_SEPARATOR) . DIRECTORY_SEPARATOR . 'tcr-contact-rate';
if (!is_dir($rateDir) && !@mkdir($rateDir, 0700, true) && !is_dir($rateDir)) {
    respond(500, false, 'Temporary server error.');
}
$rateFile = $rateDir . DIRECTORY_SEPARATOR . hash('sha256', $ip);
if (is_file($rateFile) && (time() - (int)filemtime($rateFile)) < 60) {
    respond(429, false, 'Please wait before sending another request.');
}

function limit_text(string $value, int $maxLength): string {
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength, 'UTF-8');
    }
    if (function_exists('iconv_substr')) {
        $result = iconv_substr($value, 0, $maxLength, 'UTF-8');
        return $result === false ? substr($value, 0, $maxLength) : $result;
    }
    return substr($value, 0, $maxLength);
}

function clean_text(string $value, int $maxLength): string {
    $value = trim(preg_replace('/\s+/u', ' ', strip_tags($value)) ?? '');
    return limit_text($value, $maxLength);
}

$name = clean_text((string)($_POST['name'] ?? ''), 100);
$company = clean_text((string)($_POST['company'] ?? ''), 120);
$emailRaw = trim((string)($_POST['email'] ?? ''));
$phone = clean_text((string)($_POST['phone'] ?? ''), 40);
$message = trim(strip_tags((string)($_POST['message'] ?? '')));
$message = limit_text($message, 4000);
$language = ($_POST['language'] ?? 'en') === 'ru' ? 'ru' : 'en';
$consent = (string)($_POST['consent'] ?? '') === '1';

if ($name === '' || $message === '' || !$consent || !filter_var($emailRaw, FILTER_VALIDATE_EMAIL)) {
    respond(422, false, 'Please complete the required fields correctly.');
}

// Prevent mail header injection.
if (preg_match('/[\r\n]/', $emailRaw)) {
    respond(422, false, 'Invalid email address.');
}

$to = 'info@tcrexperteez.com';
$subject = 'New website inquiry — TCR Experteez Ltd';
$host = preg_replace('/[^a-z0-9.-]/i', '', (string)($_SERVER['HTTP_HOST'] ?? 'tcrexperteez.com'));
$fromDomain = $host !== '' ? $host : 'tcrexperteez.com';
$from = 'website@' . $fromDomain;

$body = "New inquiry from the TCR Experteez website\n\n";
$body .= "Name: {$name}\n";
$body .= "Company: " . ($company !== '' ? $company : 'Not specified') . "\n";
$body .= "Email: {$emailRaw}\n";
$body .= "Phone: " . ($phone !== '' ? $phone : 'Not specified') . "\n";
$body .= "Language: {$language}\n";
$body .= "IP: {$ip}\n\n";
$body .= "Request:\n{$message}\n";

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: TCR Experteez Website <' . $from . '>',
    'Reply-To: ' . $name . ' <' . $emailRaw . '>',
    'X-Mailer: PHP/' . PHP_VERSION,
];

$sent = @mail($to, $encodedSubject, $body, implode("\r\n", $headers));
if (!$sent) {
    respond(500, false, 'Mail service is not configured on the server.');
}

@touch($rateFile);
respond(200, true, 'Request sent.');
