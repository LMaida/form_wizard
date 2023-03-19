const btnStepThree = document.getElementById("step-3");

btnStepThree.addEventListener("click", () => {
    changeAddOnsPricingPlan();
    displayAndStoreSelectedAddons();
    enableAddonCheckboxes();
})

document.addEventListener("click", (e) => {
    if (e.target.id === ("next-step-4")) {
        changePricingPlanStepFour();
    }
 })

 document.addEventListener("click", (e) => {
    if (e.target.id === ("previous-step-2")) {
        checkActiveCard();
        checkIfSelectedCard();
    }
 })

function changeAddOnsPricingPlan() {
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";
    const cardsPrice = document.querySelectorAll(".card-price");

    if (pricingPlan === "year") {
        cardsPrice.forEach((card, index) => {
            if (index ===0) {
                card.innerHTML = "$10/yr";
            }else if (index === 1) {
                card.innerHTML = "$20/yr";
            }else {
                card.innerHTML = "$20/yr";
            }
         })
    } else {
        cardsPrice.forEach((card, index) => {
            if (index ===0) {
                card.innerHTML = "$1/mo";
            }else if (index === 1) {
                card.innerHTML = "$2/mo";
            }else {
                card.innerHTML = "$2/mo";
            }
        })
    }
}

function enableAddonCheckboxes() {
    const selectedAddons = JSON.parse(localStorage.getItem("selectedAddons")) || [];

    const addonCheckboxes = document.querySelectorAll(".addon-checkbox");

    addonCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("click", () => {

            if (checkbox.hasAttribute("checked")) {
                checkbox.removeAttribute("checked");
                const checkboxID = checkbox.id;
                const fileterAddons = selectedAddons.filter(checkbox => checkbox !== checkboxID);
                localStorage.setItem("selectedAddons", JSON.stringify(fileterAddons));
                displayAndStoreSelectedAddons();
            } else {
                checkbox.setAttribute("checked", "");
                selectedAddons.push(checkbox.id);
                localStorage.setItem("selectedAddons", JSON.stringify(selectedAddons));
                displayAndStoreSelectedAddons();
             }
        })
    })
}

function displayAndStoreSelectedAddons() {
    const selectedAddons = JSON.parse(localStorage.getItem("selectedAddons")) || [];
    const addonCheckboxes = document.querySelectorAll(".addon-checkbox");
    let addonsValues = [];

    addonCheckboxes.forEach(checkbox => {
        selectedAddons.forEach(box => {
            if(checkbox.id === box) {
                checkbox.setAttribute("checked", "");
                let addonValue  = checkbox.value;
                 addonsValues.push(addonValue);
            }
        })
    })

    localStorage.setItem("addonValues", JSON.stringify(addonsValues));
}
