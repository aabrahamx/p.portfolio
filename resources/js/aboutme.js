
$(document).ready(() => {

    $('section').click((event) => {
        console.log('clicked')
        $(event.currentTarget).toggleClass('active');
        $(event.currentTarget).siblings().removeClass('active')
    })

})