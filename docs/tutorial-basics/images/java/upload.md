---
sidebar_position: 1
---

# Upload Images using Java Spring Boot

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

## Code example using Java Spring Boot

```Java title="upload images"
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@SpringBootApplication
public class ImageUploadApplication {

    public static void main(String[] args) {
        SpringApplication.run(ImageUploadApplication.class, args);
    }
}

@RestController
@RequestMapping("/uploads")
class ImageUploadController {

    // Set your API key and user ID
    private static final String apiKey = "your-api-key";
    private static final String userId = "your-user-id";

    // Set image processing parameters
    //you can include as much customization as you want
    private static final String crop = "10,20,300,400";
    private static final int rotate = 45;
    private static final int quality = 95;
    // private static final int width = 300;
    // private static final int height = 400;

    // Set your API endpoint URL
    private static final String apiUrl = "https://mediaGlens.io/api/upload-images";

    @PostMapping
    public String handleImageUpload(@RequestParam("images") MultipartFile[] images) throws IOException {
        RestTemplate restTemplate = new RestTemplate();

        // Create FormData equivalent in Java
        MultiValueMap<String, Object> formData = new LinkedMultiValueMap<>();
        for (MultipartFile image : images) {
            formData.add("images", new ByteArrayResource(image.getBytes()) {
                @Override
                public String getFilename() {
                    return image.getOriginalFilename();
                }
            });
        }
           // Make a PUT request to upload the images with query parameters
    String response = restTemplate.putForObject(apiUrl + "?crop={crop}&rotate={rotate}&quality={quality}", formData, String.class, apiKey, userId, crop, rotate, quality);



         // Return the response data from the upload
        return response;
    }
}

```

## Response Format

Upon successful upload, the API responds with a JSON object containing details of the processed images. Here's an example:

```json title="result"
{
  "processedImages": [
    {
      "key": "d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp", //use this key to delete later
      "mimeType": "image/webp",
      "OriginalFileSize": "14.05 MB",
      "finalFileSize": "0.03 MB",
      "compressionApplied": "99.80%",
      "imageUrl": "https://mediaglens.s3.amazonaws.com/your-user-id/images/d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp",
      "thumbnailUrl": "https://mediaglens.s3.amazonaws.com/your-user-id/images/thumbnails/d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp"
    }
    // ... additional images
  ]
}
```
