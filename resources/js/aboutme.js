
$(document).ready(() => {
    $('section').click((event) => {
        $(event.currentTarget).toggleClass('active');
        $(event.currentTarget).siblings().removeClass('active')
    })
})