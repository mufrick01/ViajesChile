document.addEventListener('DOMContentLoaded', function () {


    window.addEventListener('scroll', function () {
        const mynavbar = document.getElementById('mynav');
        if (window.scrollY > 0) {
            mynavbar.classList.add('glassmorphism');
        } else {
            mynavbar.classList.remove('glassmorphism');
        }
    });

    const mynav = document.getElementById('mynav');
    
    mynav.addEventListener('mouseover', () => {
        mynav.classList.add('glassmorphism');
    });
    mynav.addEventListener('mouseout', () => {
        mynav.classList.remove('glassmorphism');
    });


});