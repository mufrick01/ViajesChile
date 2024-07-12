document.addEventListener('DOMContentLoaded', function () {


    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    window.addEventListener('scroll', function () {
        const mynavbar = document.getElementById('mynav');
        if (window.scrollY > 0) {
            mynavbar.classList.add('bg-info');
        } else {
            mynavbar.classList.remove('bg-info');
        }
    });

    const mynav = document.getElementById('mynav');

    mynav.addEventListener('mouseover', () => {
        mynav.classList.add('bg-info');
    });
    mynav.addEventListener('mouseout', () => {
        if(window.scrollY==0){
            mynav.classList.remove('bg-info');
        }
    });


});