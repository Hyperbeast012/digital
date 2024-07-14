$(document).ready(function() {
    $('.field').hide();

    $('.contact-btn').click(function() {
        $('.field').fadeIn();
    });

    $('.cross').click(function() {
        $('.field').fadeOut();
    });

    $('form').submit(function(event) {
        if (!$('#check').is(':checked')) {
            alert('You must agree to the terms and conditions.');
            event.preventDefault(); 
        }
    });
    $('.project-content .content-1').click(function() {
        var index = $(this).index();
        $('.project-img div').removeClass('active');
        $('.project-content .content-1').removeClass('active-content');
        $(this).addClass('active');
        $('.project-content .content-1').eq(index).addClass('active-content');
        $('.project-img div').each(function(i) {
            $(this).css('opacity', i === index ? 1 : 0);
        });
    });
});

