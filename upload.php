<?php
header('Content-Type: application/json');

$uploadDir = 'uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0777, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['captura'])) {
    $nombreArchivo = uniqid('captura_', true) . '.' . pathinfo($_FILES['captura']['name'], PATHINFO_EXTENSION);
    $rutaDestino = $uploadDir . $nombreArchivo;

    if (move_uploaded_file($_FILES['captura']['tmp_name'], $rutaDestino)) {
        // Actualizar contador
        $contadorPath = 'contador.json';
        $contador = 0;
        if (file_exists($contadorPath)) {
            $contadorData = json_decode(file_get_contents($contadorPath), true);
            $contador = $contadorData['contador'] ?? 0;
        }
        $contador++;
        file_put_contents($contadorPath, json_encode(['contador' => $contador]));

        echo json_encode([
            'success' => true,
            'imagePath' => $rutaDestino
        ]);
    } else {
        echo json_encode(['success' => false, 'error' => 'No se pudo guardar la imagen.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Petición inválida.']);
}
