// Document Ready Function
$(document).ready(function () {
    // Navbar scroll handling
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-solid');
        } else {
            $('.navbar').removeClass('navbar-solid');
        }
    });

    // Video Source Handling
    var $videoSrc;
    $('.intro-btn').click(function () {
        $videoSrc = $(this).data("src");
    });

    // Modal Video Handling
    $('#introModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    });

    $('#introModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    });

    // Navigation Active State
    const pathname = window.location.pathname;
    $(".nav-link").removeClass("active");
    switch (pathname) {
        case "/":
            $("#home").addClass("active");
            break;
        case "/about-us":
            $("#about").addClass("active");
            break;
        case "/contact-us":
            $("#contact").addClass("active");
            break;
    }
});

// Hide preloader when page loads
$(window).on('load', function() {
    $('.preloader').fadeOut('slow');
});

// Utility Functions
function showToast(title, message) {
    toastr.options = {
        "closeButton": true,
        "progressBar": true
    }
    toastr.success(message, title)
}

function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function generateUrl(str) {
    str = str.replace(/^\s+|\s+$/g, '');
    str = str.toLowerCase();
    str = str.replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    return str;
}
