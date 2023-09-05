document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-item .question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});
