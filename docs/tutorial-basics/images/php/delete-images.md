---
sidebar_position: 2
---

# Delete Images in php

To delete images using php, you need to provide the image keys that were given when the images were uploaded. You can delete a single image or multiple images at once.

## Prerequisites

- `your-api-key`
- `your-user-id`

##Code examples
```php title="deleting multiple images"
<?php
// Set your API key and user ID
$apiKey = 'your-api-key';
$userId = 'your-user-id';
//a key look like this $imageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg';
// Set the image keys you want to delete
$imageKeys = ['key1.jpg', 'key2.jpg', 'key3.jpg'];

// Prepare the API endpoint URL for deleting multiple images
$apiUrl = 'http://your-api-endpoint/delete-multiple-images';

// Prepare the request body as JSON
$requestBody = json_encode(['keys' => $imageKeys]);

// Make HTTP request using file_get_contents with the request body
$options = [
    'http' => [
        'header' => [
            'Content-type: application/json',
            "x-api-key: $apiKey",
            "x-user-id: $userId",
        ],
        'method' => 'DELETE',
        'content' => $requestBody,
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($apiUrl, false, $context);

// Handle the API response
if ($result !== false) {
    $responseData = json_decode($result, true);

    // Handle the response data as needed
    print_r($responseData);
} else {
    // Handle HTTP request error
    echo 'HTTP request failed.';
}
?>
```
```php title="deleting a single image"
<?php
// Set your API key and user ID
$apiKey = 'your-api-key';
$userId = 'your-user-id';

// Set the image key you want to delete
$imageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg';

// Prepare the API endpoint URL for image deletion
$apiUrl = 'http://your-api-endpoint/delete-image';

// Prepare the request body
$requestBody = http_build_query([
    'key' => $imageKey,
]);

// Make HTTP request using file_get_contents with the request body
$options = [
    'http' => [
        'header' => [
            "Content-type: application/x-www-form-urlencoded",
            "x-api-key: $apiKey",
            "x-user-id: $userId",
        ],
        'method' => 'DELETE',
        'content' => $requestBody,
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($apiUrl, false, $context);

// Handle the API response
if ($result !== false) {
    $responseData = json_decode($result, true);

    // Handle the response data as needed
    print_r($responseData);
} else {
    // Handle HTTP request error
    echo 'HTTP request failed.';
}
?>
```
## Response Format

Upon successful deletion, the API responds with a JSON object containing a success message. Here's an example:

```json title="result"
{
  "message": "images deleted successfully."
}
```