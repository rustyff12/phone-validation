const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const results = document.querySelector("#results-div");

checkBtn.addEventListener("click", () => {
    const inputValue = userInput.value;
    if (inputValue === "") {
        alert("Please provide a phone number");
        return;
    }

    if (validationCheck(inputValue)) {
        results.textContent = `Valid US number: ${inputValue}`;
        return;
    }

    if (!validationCheck(inputValue)) {
        results.textContent = `Invalid US number: ${inputValue}`;
        return;
    }
});

clearBtn.addEventListener("click", () => {
    userInput.value = "";
    results.textContent = "";
});

const validationCheck = (str) => {
    let regExp = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
    return regExp.test(str);
};
