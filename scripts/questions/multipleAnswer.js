let currentNumber = document.getElementById('current');
let progressBar = document.querySelector('.progress-bar');
progressBar.style.width = Number(currentNumber.textContent) * 5 + "%";
// setting the question number on the form
let questionNumber = document.querySelector('.questionNumber');
questionNumber.textContent = currentNumber.textContent;
// setting the main element's height to set to the device height
window.addEventListener('load', () => {
    document.querySelector('main').style.height = window.innerHeight - 50 + 'px';
});
// setting the main element's height to set to the device height while resizing page
window.addEventListener('resize', () => {
    document.querySelector('main').style.height = window.innerHeight + 'px';
});

let questions = document.querySelectorAll('.question');
let selected;
questions.forEach((question) => {
    question.addEventListener('click', () => {
        // Turn all questions white
        questions.forEach((q) => {
            q.style.background = "white";
            let radio = q.querySelector('input[type=radio]');
            radio.checked = false;
        });
        // Change the background of the clicked question
        question.style.background = "var(--themeColorCoral)";
        question.querySelector('input[type=radio]').checked = true;
        selected = question;
    });
});

// validating to be selected 
let nextButton = document.querySelector('.next');
let errorMessage = document.querySelector('.errorMessage');
let formOk = false;
nextButton.addEventListener('click', () => {
    if (!selected) {
        formOk = false;
        errorMessage.textContent = "باید یکی از گزینه ها انتخاب شود";
    }
    else {
        formOk = true;
        errorMessage.textContent = "";
    }
    if (formOk) {
        document.querySelector('form').submit();
    }
});