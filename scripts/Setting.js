// Showing password
let showPassword = document.getElementById('showPassword');
let input1 = document.getElementById('password');
let input2 = document.getElementById('repassword');
let errorMessage = document.getElementById('errorMessage');

// Function for showing and hiding the password
showPassword.addEventListener('change', () => {  // Changed 'input' to 'change'
    if (showPassword.checked) {
        input1.type = "text";
        input2.type = "text";
    } else {
        input1.type = "password";
        input2.type = "password";
    }
});

// Function for checking the input to be valid
function checkLatin(input) {
    // Regular expression to match only Latin letters and numbers, no spaces
    const regex = /^[A-Za-z0-9]+$/;
    return regex.test(input.value); // Changed 'input' to 'input.value'
}

// Function for checking the inputs to not be empty
function checkValid(inp) {
    return inp.value !== undefined && inp.value !== ""; // Simplified the function
}

// Function for submit button
let submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', (event) => {  // Added 'event' parameter
    let condition = true;  // Moved inside the event listener

    // Checking if the inputs are valid and not empty
    if (!checkValid(input1) || !checkValid(input2)) {
        errorMessage.textContent = "بعضی از فیلد ها خالی میباشد";
        errorMessage.style.color = "red";
        condition = false;
    } else if (!checkLatin(input1) || !checkLatin(input2)) {
        errorMessage.textContent = "باید در رمز از حروف لاتین و اعداد استفاده شود";
        errorMessage.style.color = "red";
        condition = false;
    } else {
        errorMessage.textContent = "";
        console.log("Both inputs are valid and Latin");
    }

    // Prevent form submission if condition is false
    if (condition) {
        document.querySelector('form').submit();
    } else {
        event.preventDefault(); // Added to prevent form submission on invalid input
    }
});
