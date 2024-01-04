---
sidebar_position: 2
---

# Delete Images

To delete images using Node.js, you need to provide the image keys that were given when the images were uploaded. You can delete a single image or multiple images at once.

## Prerequisites

- Node.js installed
- Fetch API or any other HTTP request library installed

## Delete Single Image Example Code

```javascript title="delete single image"
const apiKey = 'your-api-key';
const userId = 'your-user-id';
const singleImageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero';

fetch('https://your-api-url/api/delete-images', {
  method: 'DELETE',
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: singleImageKey }),//explicitly use key not keys 
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  ```
  ## Delete multiple images
  ````javascript title="delete multiple images"
const apiKey = 'your-api-key';
const userId = 'your-user-id';
const imageKeys = [
  'd615f397-8462-47e4-812b-20d0fd3041d7-hero',
  '43721e8f-3fcc-4297-9ff4-3424a90c1af0-Textile_workshop',
];

fetch('https://your-api-url/api/delete-images', {
  method: 'DELETE',
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ keys: imageKeys }),//should be of type array and pas property keys in plural
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```