<?php

$data = file_get_contents("php://input");

$data = json_decode($data, true);

if ($data && isset($data['name']) && isset($data['message']) && isset($data['No_count'])) {

    $jsonData = file_get_contents('data.json');
    $existingData = json_decode($jsonData, true);

    $existingData[] = $data;

    $jsonData = json_encode($existingData, JSON_PRETTY_PRINT);
    file_put_contents('data.json', $jsonData);

    http_response_code(200);
    echo "Data saved successfully!";
} else {
    http_response_code(400);
    echo "Invalid data!";
}
?>
