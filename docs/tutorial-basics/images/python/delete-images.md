---
sidebar_position: 1
---

# Delete Images

This guide explains how to delete images from your server using Python with Flask or Django.
 
## Prerequisites

You need to provide the image keys that were given when the images were uploaded. You can delete a single image or multiple images at once.

## Delete a Single Image
To delete a single image, you need to provide the `key` property in the request.

```python title="delete single image in flask/django"
import requests

# API endpoint URL
api_url = 'http://your-api-endpoint/delete-image'
#a key look like this imageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg';
# Set headers and parameters
headers = {
    'x-api-key': 'your-api-key',
    'x-user-id': 'your-user-id',
}
params = {
    'key': 'your-image-key',
}

# Make a DELETE request
response = requests.delete(api_url, headers=headers, params=params)

# Check the response
if response.status_code == 200:
    print("Image deleted successfully!")
else:
    print(f"Failed to delete image. Status code: {response.status_code}")
    print(response.text)
```
### Delete a multiple Images

To delete a multiple images, you need to provide the `keys` property in the request with array of image keys .

```python title="multiple deletion of images using flask/django"
import requests

# API endpoint URL
api_url = 'http://your-api-endpoint/delete-images'

#a key  normaly look  like this $imageKey = 'd615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg';
# Set headers and parameters
headers = {
    'x-api-key': 'your-api-key',
    'x-user-id': 'your-user-id',
}
params = {
    'keys': ['key1', 'key2', 'key3'],  # Add the keys of images to delete
}

# Make a DELETE request
response = requests.delete(api_url, headers=headers, params=params)

# Check the response
if response.status_code == 200:
    print("Images deleted successfully!")
else:
    print(f"Failed to delete images. Status code: {response.status_code}")
    print(response.text)
```