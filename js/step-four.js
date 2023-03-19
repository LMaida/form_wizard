const formSummary = document.querySelector("#form-summary");
const checkAddOns = document.querySelectorAll(".check-add-ons");
const btnConfirm = document.querySelector(".btn-confirm");
const btnStepFour = document.getElementById("step-4");

const icons = {
    thankYouIcon: "icon-thank-you.svg",
    iconPro: "icon-pro.svg"
}

btnStepFour.addEventListener("click", (e) => {
    changePricingPlanStepFour();
    checkSelectedPlan();
    displaySelectedAddons();
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-add-ons")) {
        e.target.parentElement.classList.toggle("active-card");
    }
})  

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-confirm")) {
        confirmDialog(icons.thankYouIcon, "Thank you!", "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com");
    }
})

document.addEventListener("click", (e) => {    
    if (e.target.id === ("previous-step-3")) {
        changeAddOnsPricingPlan();
        displayAndStoreSelectedAddons();
    }
})

 document.addEventListener("click", (e) => {

    if (e.target.classList.contains("change-plan")) {
        stepID = "step-2";
        const btnStepFour = document.getElementById("step-4");
        const btnStepTwo = document.getElementById("step-2");
        
        btnStepFour.classList.remove("active-state");
        btnStepTwo.classList.add("active-state");
        
        updateFormSteps(stepID);
        checkActiveCard()
        checkPlanDuration()
    }
})

function changePricingPlanStepFour() {
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";

    if (pricingPlan === "year") {
        const cardsPrice = document.querySelectorAll(".card-price");
        cardsPrice.forEach((card, index) => {
            if (index ===0) {
                card.innerHTML = "+$10/yr";
            }else if (index === 1) {
                card.innerHTML = "+$20/yr";
            }else {
                card.innerHTML = "+$20/yr";
            }
        })
    }
    checkSelectedPlan();
    totalAmount(); 
}

function totalAmount() {
    const sumNumbers = document.querySelectorAll(".sum-num");
    const totalAmount = document.querySelector(".total-price");
     
    let pricesArr = [];
    let totalPrice = 0;
 
    sumNumbers.forEach(number => {
        number = number.innerHTML;
        number = number.split("$")[1].split("/")[0]
        pricesArr.push(parseInt(number));
    })
 
    if (pricesArr.length > 0) {
        totalPrice = pricesArr.reduce((sum, currentValue) => {
            return sum + currentValue;
       })
    } 
    
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";

    if (pricingPlan === "year") {
        totalAmount.innerHTML = `+$${totalPrice}/yr`;
    } else {
        if (totalAmount) {
            totalAmount.innerHTML = `+$${totalPrice}/mo`;
        }
    }
}

function confirmDialog(icon, title, msg) {
    const stepsFinish = document.createElement("div");

    stepsFinish.classList.add("form-summary");

    stepsFinish.innerHTML = `
        <img src="images/${icon}">
        <span class="title">${title}</span>
        <p class="text">${msg}</p>
    `
    const formContent = document.querySelector(".form-content");
    const formHeader = document.querySelector(".form-header");
    const form = document.querySelector(".form");
    const formFooter = document.querySelector(".form-footer");
    
    formHeader.remove();
    form.remove();
    formFooter.remove();

    formContent.appendChild(stepsFinish);
}

function checkSelectedPlan () {
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";
    const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan")) || "";
    const planPrice = JSON.parse(localStorage.getItem("planPrice")) || "";

    const cardTitlePlan = document.querySelector(".selected-plan");
    const price = document.querySelector(".plan-price");
    
    if (price) {
        price.innerHTML = planPrice;

        if (pricingPlan === "year") {
            cardTitlePlan.innerHTML = selectedPlan + "" + "(Yearly)";
        } else {
            cardTitlePlan.innerHTML = selectedPlan + "" + "(Monthly)";
        }
    }
}

function displaySelectedAddons () {
    const addonValues = JSON.parse(localStorage.getItem("addonValues")) || [];
    const cards = document.querySelector(".step-four-cards");
    
    addonValues.forEach(card => {
        let cardTitle = card.split("-")[0];
        let cardPrice = card.split("-")[1];
        
        const cardAddon = document.createElement("div");
        cardAddon.classList.add("checked-add-ons");

        cardAddon.innerHTML = `
            <div class="form-control card checked-add-ons">
                <div class="add-ons-content">
                    <span class="check-add-ons">${cardTitle}</span>
                    <span class="card-price sum-num">${cardPrice}</span>
                </div>
        </div>
        `
        cards.appendChild(cardAddon);
    })
    changePricingPlanStepFour();
}