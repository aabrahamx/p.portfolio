
//this document is to display the faq styled dropdowns. ex: about me page.

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

