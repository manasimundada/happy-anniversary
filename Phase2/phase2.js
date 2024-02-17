window.addEventListener('DOMContentLoaded', function() {
    const textContainer = document.getElementById('text-container');
    const imageGallery = document.querySelector('.image-gallery');

    function adjustImageGalleryHeight() {
        const textHeight = textContainer.clientHeight;
        imageGallery.style.height = textHeight + 'px';
    }

    // Call the function initially
    adjustImageGalleryHeight();

    // Call the function whenever the window is resized
    window.addEventListener('resize', adjustImageGalleryHeight);
});
