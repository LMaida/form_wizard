function checkIfEmptyInput(input) {

    if (input.value.trim() !== "") {
        input.parentElement.classList.remove("error");
        return false;
    } else {
        input.parentElement.classList.add("error");
        return true;
    };
};

function checkIfAllEmpty(formName) {
    const inputs = formName.getElementsByClassName("input");
    let isTrue = true;

    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            isTrue = false;
            inputs[i].parentElement.classList.add("error");
            break;
        }
    }

    return isTrue;
}

function checkIfSelectedCard () {
    const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
    const message = document.querySelector(".message-plan");

    if (selectedPlan.length < 1) {
        message.classList.add("error");
        return true;
    } else {
        return false;
    }
}
