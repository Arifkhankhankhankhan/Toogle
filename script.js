document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', function () {
        // Toggle background color between light and dark
        body.style.backgroundColor = body.style.backgroundColor === 'white' ? '#333' : 'white';
    });
});
