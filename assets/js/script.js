document.addEventListener('DOMContentLoaded', function () {


    window.addEventListener('scroll', function () {
        const myDiv = document.getElementById('mynav');
        if (window.scrollY > 0) {
            myDiv.classList.add('glassmorphism');
        } else {
            myDiv.classList.remove('glassmorphism');
        }
    });


});