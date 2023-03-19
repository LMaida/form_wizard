const btnStepTwo = document.getElementById("step-2");

btnStepTwo.addEventListener("click", () => {
    checkActiveCard();
    checkPlanDuration();
})

document.addEventListener ("click", (e) => {
    if (e.target.classList.contains("step-two-card")) {
        const cards = document.querySelectorAll(".step-two-card") 
        const message = document.querySelector(".message-plan");

        cards.forEach(card => card.classList.remove("active-card"))

        e.target.classList.add("active-card");
        message.classList.remove("error");
        }
 })

 document.addEventListener("click", (e) => {

    if (e.target.id === ("next-step-3")) {
        changeAddOnsPricingPlan();
        displayAndStoreSelectedAddons();
    }
 })

 document.addEventListener("click", (e) => {

    if (e.target.id === ("previous-step-2")) {
        checkPlanDuration()
    }
 })

 document.addEventListener("click", (e) => {

    if(e.target.classList.contains("btn-change-plan")) {
        e.target.parentElement.classList.toggle("change-state");

        changePricingPlan();
    }
 })

 document.addEventListener("click", (e) => {

    if (e.target.classList.contains("step-two-card")) {
        setSelectedPlan()
        setPriceForPlan()
    }
})

 function changePricingPlan () {
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";
    const cardsPrice = document.querySelectorAll(".year-price");
    const cardPopUp = document.querySelectorAll(".card-pop-up");

    if (pricingPlan === "year") {
        cardsPrice.forEach((card, index) => {
            if (index ===0) {
                card.innerHTML = "$90/yr";
            }else if (index === 1) {
                card.innerHTML = "$120/yr";
            }else {
                card.innerHTML = "$150/yr";
            }
         }) 

         cardPopUp.forEach(card => {
             card.classList.add("show-pop-up")
         })
    } else if (pricingPlan === "month") {
        cardsPrice.forEach((card, index) => {
            if (index ===0) {
                card.innerHTML = "$9/mo";
            }else if (index === 1) {
                card.innerHTML = "$12/mo";
            }else {
                card.innerHTML = "$15/mo";
            }
        })

        cardPopUp.forEach(card => {
            card.classList.remove("show-pop-up")
        })
    }
 }

 function checkPlanDuration() {
    const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || "";

    if (pricingPlan === "year") {
        const btnSelectPlan = document.querySelector(".select-plan");
        
        btnSelectPlan.classList.add("change-state");
        changePricingPlan()
    }
 }

 function checkActiveCard () {
    const selectedPlan = JSON.parse(localStorage.getItem("selectedPlan")) || "";
    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {
        if (plan.innerHTML === selectedPlan) {
            plan.parentElement.parentElement.classList.add("active-card");
        }
    })
 }

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-change-plan")) {
        const pricingPlan = JSON.parse(localStorage.getItem("pricingPlan")) || ""
        
        if (pricingPlan === "month") {
            localStorage.setItem("pricingPlan", JSON.stringify("year"));

            changePricingPlan();
            setPriceForPlan()
        } else {
            localStorage.setItem("pricingPlan", JSON.stringify("month"));

            changePricingPlan();
            setPriceForPlan()
        }
    }
}) 

function setSelectedPlan () {
    const plans = document.querySelectorAll(".plan");

    plans.forEach(plan => {
         if (plan.parentElement.parentElement.classList.contains("active-card")) {
             plan = plan.innerHTML;
             localStorage.setItem("selectedPlan", JSON.stringify(`${plan}`))
         }
     })
}

function setPriceForPlan () {
    const planPrices = document.querySelectorAll(".year-price");

    planPrices.forEach(price => {
        if (price.parentElement.parentElement.classList.contains("active-card")) {
            price = price.innerHTML;
            localStorage.setItem("planPrice", JSON.stringify(`${price}`))
        }
    })
} 