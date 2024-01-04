---
sidebar_position: 1
---

# Upload Images

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

## Code Example - JavaScript

```javascript title="Upload Images Example"
const apiKey = 'your-api-key';
const userId = 'your-user-id';

const formData = new FormData();
formData.append('images', file1); // Replace file1 with your image file
formData.append('images', file2); // Replace file2 with another image file
//you can include as much customization as you want
//width=300;  
//height=400;

fetch('https://your-api-url/api/upload-images?width=500&height=300&quality=80&crop=10,10,200,200&progressive=true&grayscale=true&rotate=90&format=JPEG', {
  method: 'PUT',
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
  },
  body: formData,
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Response Format

Upon successful upload, the API responds with a JSON object containing details of the processed images. Here's an example:

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
