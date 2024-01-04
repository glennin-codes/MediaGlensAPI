---
sidebar_position: 1
---
# Upload Images using Node js

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

To upload images using Node.js, ensure that your image files have been received on your server. You can use packages like multer to handle file uploads.

## Prerequisites

- Node.js installed
- Express installed
- Multer installed for handling file uploads
- Axios installed for making HTTP requests

## Example Code

```javascript title="Upload using node"
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000
const axios = require('axios');
const FormData = require('form-data');

// Set your API key and user ID
const apiKey = 'your-api-key';
const userId = 'your-user-id';

// Set image processing parameters
const crop = '10,20,300,400';
const rotate = 45;
const quality = 95;
//you can include as much customization as you want
//width=300;  
//height=400;
//grayscale=true

// Ensure your  uploaded images  to your backend with the help of multer
const storage = multer.memoryStorage();//you can provide a temporary disk storage please console multer's documentation
const upload = multer({ storage: storage });
 // asuming we are in the upload route or endpoint of your server 

app.post('/uploads' ,upload.array('images'),(req,res)=>{
  const files = req.files;  //if using tpyescript req.files.as Express.Multer.File[];
  const formData = new FormData();

// Map each file and append it to the FormData object
files.forEach((file) => {
  formData.append('images', file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype,
  });
});

// Make a PUT request to upload the images
axios.put('https://your-api-url/api/upload-images', formData, {
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
  },
  params: {
    crop,
    quality,
    rotate,
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
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
```