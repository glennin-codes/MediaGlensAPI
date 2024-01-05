---
sidebar_position: 1
---

# Upload Images using Python

To upload images, use the `/api/upload-images` endpoint. You can upload multiple images in a single request. Make sure to replace `your-api-key` and `your-user-id` with your actual API key and user ID.
#### aplies to both flask and django

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


## Uploading code example
```python title="using flask/django"
import requests

# Assuming the images are stored in a Django model named UploadedImage
from your_app.models import UploadedImage

# Fetch the images from the UploadedImage model or any other source
images = UploadedImage.objects.all()

# Prepare FormData
formData = {}
for image in images:
    formData['images'] = (image.image.name, image.image.read(), image.image.content_type)

# Define API endpoint URL
api_url = 'https://your-api-url/api/upload-images'

# Set headers and parameters
headers = {
    'x-api-key': 'your-api-key',
    'x-user-id': 'your-user-id',
}
params = {
 #   you can include any customization as you want
    'crop': '10,20,300,400',
    'quality': 95,
    'rotate': 45,

# width=300;  
# height=400;
# /grayscale=true
}

# Make a PUT request
response = requests.put(api_url, files=formData, headers=headers, params=params)

# Check the response
if response.status_code == 200:
    print("Images uploaded successfully!")
else:
    print(f"Failed to upload images. Status code: {response.status_code}")
    print(response.text)
``