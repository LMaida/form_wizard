const inputs = document.querySelectorAll(".input");

inputs.forEach(input => {
    input.addEventListener("input", () => {
        checkIfEmptyInput(input);
    });
});
