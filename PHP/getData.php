<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Rest of your PHP script

header("Content-Type: application/json");

// Read the JSON file
$data = file_get_contents('embedConfig.json');
//echo "data ", $data;

if ($data === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(array("error" => "Could not read the JSON file."));
    exit();
}

// Parse the JSON data
$dataArray = json_decode($data, true);
//echo "\ndataArray ", $dataArray;

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(500); // Internal Server Error
    echo json_encode(array("error" => "Could not parse the JSON data."));
    exit();
}

// Extract specific values
$selectedValues = array(
    "DashboardId" => $dataArray["DashboardId"],
    "ServerUrl" => $dataArray["ServerUrl"],
    "SiteIdentifier" => $dataArray["SiteIdentifier"],
    "EmbedType" => $dataArray["EmbedType"],
    "Environment" => $dataArray["Environment"],
);

// Return the specific values of parsed data as JSON response
echo json_encode($selectedValues, JSON_PRETTY_PRINT);
?>