$(document).ready(function() {
        window.setTimeout(function() {
            $("#preloader-wrap").fadeOut(400, function() {
                $(this).remove();
            });
        }, 1000);
});