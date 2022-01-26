
//this js document sole purpose is to display hidden faq styled content

/*

const arrow = document.querySelector('.arrow-1');
const content = document.querySelector('.sec-low-1');


arrow.style.cursor = 'pointer';


arrow.addEventListener("click", () => {
    if (content.style.display == 'block') {
        content.style.display = 'none';
    } else if (content.style.display == 'none') {
        content.style.display = 'block';
    }
});

*/


let answers = document.querySelectorAll("section");
answers.forEach((event) => {
    event.addEventListener("click", () => {
        if (event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    });
});

