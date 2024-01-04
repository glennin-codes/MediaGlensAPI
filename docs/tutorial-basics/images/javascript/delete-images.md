---
sidebar_position: 2
---

# Delete Images

To delete images, use the `/api/delete-images` endpoint. You need to provide the image keys as an array in the request body.

## Request Parameters

- `keys` (required): An array of image keys to be deleted. Each key corresponds to a previously uploaded image. You can pass a single key for deleting a specific image.

## Response Format

Upon successful deletion, the API responds with a JSON object containing a success message. Here's an example:

```json
{
  "message": "images deleted successfully."
}
```
## Delete multiple images
Delete one or more images by their keys. The request should contain an `array` of image keys.

```javascript
const apiKey = 'your-api-key';
const userId = 'your-user-id';
const imageKeys = ['d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp', '43721e8f-3fcc-4297-9ff4-3424a90c1af0-Textile_workshop.jpg'];

fetch('https://your-api-url/api/delete-images', {
  method: 'DELETE',
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ keys: imageKeys }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```
## Delete just a single image
```javascript
const apiKey = 'your-api-key';
const userId = 'your-user-id';
const singleImageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg';

fetch('https://your-api-url/api/delete-images', {
  method: 'DELETE',
  headers: {
    'x-api-key': apiKey,
    'x-user-id': userId,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ key: singleImageKey }),//but here you pass key not plural keys
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```