
---
sidebar_position: 2
---

# Delete Images


## Code examples
To delete images using Java Spring Boot, you need to provide the image keys that were given when the images were uploaded. You can delete a single image or multiple images at once.

#### Delete multiple images

```java title="Delete multiple images"
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

public class DeleteImagesExample {

    public static void main(String[] args) {
        String apiUrl = "https://your-api-url/api/delete-images";
        String apiKey = "your-api-key";
        String userId = "your-user-id";

        List<String> keys = Arrays.asList(
                "d615f397-8462-47e4-812b-20d0fd3041d7-hero.webp",
                "43721e8f-3fcc-4297-9ff4-3424a90c1af0-Textile_workshop.jpg"
        );

        // Create HttpHeaders
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey);
        headers.set("x-user-id", userId);
        headers.set("Content-Type", "application/json");

        // Create HttpEntity with body and headers
        HttpEntity<List<String>> requestEntity = new HttpEntity<>(keys, headers);

        // Create RestTemplate
        RestTemplate restTemplate = new RestTemplate();

        // Make DELETE request to delete multiple images
        ResponseEntity<String> responseEntity = restTemplate.exchange(
                apiUrl,
                HttpMethod.DELETE,
                requestEntity,
                String.class
        );

        // Print response data
        System.out.println("Response: " + responseEntity.getBody());
    }
}


```
#### Delete single image

```java title="delete a single image"
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

public class DeleteSingleImageExample {

    public static void main(String[] args) {
        String apiUrl = "https://your-api-url/api/delete-images";
        String apiKey = "your-api-key";
        String userId = "your-user-id";

        String singleImageKey = "d615f397-8462-47e4-812b-20d0fd3041d7-hero.jpg";

        // Create HttpHeaders
        HttpHeaders headers = new HttpHeaders();
        headers.set("x-api-key", apiKey);
        headers.set("x-user-id", userId);
        headers.set("Content-Type", "application/json");

        // Create HttpEntity with body and headers
        HttpEntity<String> requestEntity = new HttpEntity<>(singleImageKey, headers);

        // Create RestTemplate
        RestTemplate restTemplate = new RestTemplate();

        // Make DELETE request to delete a single image
        ResponseEntity<String> responseEntity = restTemplate.exchange(
                apiUrl,
                HttpMethod.DELETE,
                requestEntity,
                String.class
        );

        // Print response data
        System.out.println("Response: " + responseEntity.getBody());
    }
}

```
