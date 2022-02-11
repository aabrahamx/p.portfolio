

$(document).ready(()=> {

    const $sections = $('section');
    $sections.click((event)=> {
        $(event.currentTarget).toggleClass('active');
        $(event.currentTarget).siblings().removeClass('active');
        if($(event.currentTarget).hasClass('active')) {
            // dependent animation on css file
            // animation on css: 2.5s 
            $('.top-content').hide();
            delayId = window.setTimeout(() => {
                $(event.currentTarget).find('.top-content').slideDown(1000);
            }, 1500)

        } else {
            window.clearTimeout(delayId);
            $('.top-content').hide();
        }
    })
});

