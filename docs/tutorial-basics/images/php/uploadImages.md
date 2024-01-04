---
sidebar_position: 1
---

# Upload Images using PHP

To upload images, use the `/api/upload-images` endpoint. You can upload multiple images in a single request. Make sure to replace `your-api-key` and `your-user-id` with your actual API key and user ID.

## Request Parameters

The endpoint supports the following query parameters:

- `width` (optional): Width of the image.
- `height` (optional): Height of the image.
- `quality` (optional): Quality of the image (default is 80).
- `crop` (optional): Crop parameters in the order left, top, width, and height.
- `progressive` (optional): Enable progressive rendering (default is false).
- `grayscale` (optional): Convert the image to grayscale (default is false).
- `rotate` (optional): Rotation angle of the image.
- `format` (optional): Output format of the image (default is the original input format). Supported formats: JPG, JPEG, PNG, WebP, TIFF, and AVIF.


# Uploading

To upload images using PHP, ensure that your image files have been received on your server. You can use the `move_uploaded_file` function to handle file uploads and then use `curl` or `file_get_contents` to make HTTP requests.

## Prerequisites

- PHP installed

## Handling images  Uploads Example

Use the following example to handle file uploads in PHP:
```php title="upload images"
<?php
// Set your API key and user ID
$apiKey = 'your-api-key';
$userId = 'your-user-id';

// Set image processing parameters
$crop = '10,20,300,400';
$rotate = 45;
$quality = 95;
//you can include as much customization as you want
//width=300;  
//height=400;
//grayscale=true

// Check if files were uploaded
if ($_FILES['images']['error'][0] == UPLOAD_ERR_OK) {
    // Set your image file paths
    $imagePaths = [];

    // Iterate over uploaded files
    foreach ($_FILES['images']['tmp_name'] as $key => $tmpName) {
        $filename = $_FILES['images']['name'][$key];
        $destination = '/path/to/your/upload/folder/' . $filename;

        // Move the uploaded file to the desired location
        if (move_uploaded_file($tmpName, $destination)) {
            $imagePaths[] = $destination;
        }
    }

    // Prepare the data for the API request
    $requestData = [
        'images' => $imagePaths,
    ];

    // Append processing parameters to the URL
    $apiUrl = 'http://your-api-endpoint/upload-images';
    $apiUrl .= '?crop=' . $crop . '&rotate=' . $rotate . '&quality=' . $quality;

    // Make HTTP request using file_get_contents
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'PUT',
            'content' => http_build_query($requestData),
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
} else {
    // Handle file upload errors
    echo 'File upload failed.';
}
?>
```
```json title="result"

{
  "processedImages": [
    {
      "key": "d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp",//use this key to delete later
      "mimeType": "image/webp",
      "OriginalFileSize": "14.05 MB",
      "finalFileSize": "0.03 MB",
      "compressionApplied": "99.80%",
      "imageUrl": "https://mediaglens.s3.amazonaws.com/your-user-id/images/d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp",
      "thumbnailUrl": "https://mediaglens.s3.amazonaws.com/your-user-id/images/thumbnails/d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp"
    },
    // ... additional images
  ]
}
```
```A more efficient and powerful option is to allow your users to upload images and videos in your client-side code directly from the browser to MediaGlens instead of going through your servers. This method allows for faster uploading and a better user experience. It also reduces load from your servers and reduces the complexity of your PHP applications.```You can use [javascript example](http://localhost:3000/docs/tutorial-basics/images/javascript/UploadImage)