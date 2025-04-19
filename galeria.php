<?php
header('Content-Type: application/json');

$uploadDir = 'uploads/';
$imagenes = [];

if (is_dir($uploadDir)) {
    $archivos = array_diff(scandir($uploadDir), ['.', '..']);
    foreach ($archivos as $archivo) {
        if (preg_match('/\.(jpg|jpeg|png|gif)$/i', $archivo)) {
            $imagenes[] = $uploadDir . $archivo;
        }
    }
    // Ordenar de más nuevo a más viejo
    rsort($imagenes);
}

echo json_encode(['imagenes' => $imagenes]);
