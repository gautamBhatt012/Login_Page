document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const widthInput = document.getElementById('widthInput');
    const heightInput = document.getElementById('heightInput');
    const resizeButton = document.getElementById('resizeButton');
    const originalImage = document.getElementById('originalImage');
    const resizedImage = document.getElementById('resizedImage');

    imageInput.addEventListener('change', function() {
        const file = imageInput.files[0];
        const imageUrl = URL.createObjectURL(file);
        originalImage.src = imageUrl;
    });

    resizeButton.addEventListener('click', function() {
        const imageUrl = originalImage.src;
        const width = parseInt(widthInput.value, 10);
        const height = parseInt(heightInput.value, 10);

        if (imageUrl && width && height) {
            // You would send a request to the server to resize the image here
            // Replace the following line with your actual code for image resizing
            alert('Image resizing is not implemented in this example.');
        } else {
            alert('Please provide an image and valid width and height.');
        }
    });
});