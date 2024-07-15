$(document).ready(function () {

    const tooltipTriggerList = $('[data-bs-toggle="tooltip"]');
    const tooltipList = tooltipTriggerList.map(function () {
        return new bootstrap.Tooltip($(this)[0]);
    });

    $(window).on('scroll', function () {
        const mynavbar = $('#mynav');
        if ($(window).scrollTop() > 0) {
            mynavbar.addClass('bg-info');
        } else {
            mynavbar.removeClass('bg-info');
        }
    });

    const mynav = $('#mynav');

    mynav.on('mouseover', function () {
        mynav.addClass('bg-info');
    });
    
    mynav.on('mouseout', function () {
        if ($(window).scrollTop() == 0) {
            mynav.removeClass('bg-info');
        }
    });

});
