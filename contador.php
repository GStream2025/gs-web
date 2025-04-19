<?php
header('Content-Type: application/json');

$contadorPath = 'contador.json';

if (!file_exists($contadorPath)) {
    file_put_contents($contadorPath, json_encode(['contador' => 0]));
}

$contadorData = json_decode(file_get_contents($contadorPath), true);
echo json_encode(['contador' => $contadorData['contador'] ?? 0]);
