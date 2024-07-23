document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const questions = document.querySelectorAll('.question');
    const submitButton = document.getElementById('next-button');
    const errorMessage = document.getElementById('error-message');
    let isAnswered = false;

    questions.forEach(question => {
        question.addEventListener('click', () => {
            questions.forEach(q => q.style.backgroundColor = 'white');
            question.style.backgroundColor = 'var(--themeColorCoral)';
            const radioButton = question.querySelector('input[type="radio"]');
            radioButton.checked = true;
            isAnswered = true;
        });
    });

    submitButton.addEventListener('click', () => {
        if (!isAnswered) {
            errorMessage.textContent = "Please answer all the questions.";
        } else {
            errorMessage.textContent = "";
            alert('Thank you for your feedback!');
            // document.getElementById('survey-form').submit(); // Uncomment to submit the form
        }
    });


    function ProgressChange() {
        let current = document.getElementById('currentQue').textContent;
        let progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = Number(current) * 5 + "%";
    }
    ProgressChange()
});
