const btnStep = document.querySelectorAll(".btn-step");
const formContent = document.querySelector(".form-content");

if (!JSON.parse(localStorage.getItem("pricingPlan"))) {
    localStorage.setItem("pricingPlan", JSON.stringify("month"));
} else {
    localStorage.setItem("pricingPlan", JSON.stringify("month"));
}

if (!JSON.parse(localStorage.getItem("selectedPlan"))) {
    localStorage.setItem("selectedPlan", JSON.stringify(""));
} else {
    localStorage.setItem("selectedPlan", JSON.stringify(""));
}

if (!JSON.parse(localStorage.getItem("planPrice"))) {
    localStorage.setItem("planPrice", JSON.stringify(""));
} else {
    localStorage.setItem("planPrice", JSON.stringify(""));
}

if (!JSON.parse(localStorage.getItem("addonValues"))) {
    localStorage.setItem("addonValues", JSON.stringify([]));
} else {
    localStorage.setItem("addonValues", JSON.stringify([]));
}

if (!JSON.parse(localStorage.getItem("selectedAddons"))) {
    localStorage.setItem("selectedAddons", JSON.stringify([]));
} else {
    localStorage.setItem("selectedAddons", JSON.stringify([]));
}

btnStep.forEach(step => {
    step.addEventListener("click", () => {
        const inputs = document.querySelectorAll(".input");
       
        if (step.id === "step-1") {
            btnStep.forEach(step => step.classList.remove("active-state"))
            step.classList.add("active-state");
            let stepID = step.id;
            changeSteps(stepID);

        } else if (step.id === "step-2") {
            if (inputs.length < 1) {
                btnStep.forEach(step => step.classList.remove("active-state"))
                step.classList.add("active-state");
                let stepID = step.id;
                changeSteps(stepID);
            } else {
                const formInfo = document.getElementById("form-info");
    
                inputs.forEach(input => {
                    if (checkIfEmptyInput(input)) {
                        return false;
                    }
                })
    
                if (checkIfAllEmpty(formInfo)) {
                    btnStep.forEach(step => step.classList.remove("active-state"))
                    step.classList.add("active-state");
                    let stepID = step.id;
                    changeSteps(stepID);
                }
            }
        } else if (step.id === "step-3"){
            if (inputs.length < 1) {
                let stepID = step.id;

                changeSteps(stepID);
            } else {
                const formInfo = document.getElementById("form-info");
    
                inputs.forEach(input => {
                    if (checkIfEmptyInput(input)) {
                        return false;
                    } else {
                        if (checkIfSelectedCard()) {
                            return false;
                        } else {
                            btnStep.forEach(step => step.classList.remove("active-state"))
                            step.classList.add("active-state");
                            let stepID = step.id;
                            changeSteps(stepID);
                        }
                    }
                })

                if (checkIfAllEmpty(formInfo)) {
                    let stepID = step.id;
                    changeSteps(stepID);
                }
            }
        } else if (step.id === "step-4") {
            if (inputs.length < 1) {
                let stepID = step.id;

                changeSteps(stepID);
            } else {
                const formInfo = document.getElementById("form-info");
    
                inputs.forEach(input => {
                    if (checkIfEmptyInput(input)) {
                        return false;
                    } else {
                        if (checkIfSelectedCard()) {
                            return false;
                        } else {
                            btnStep.forEach(step => step.classList.remove("active-state"))
                            step.classList.add("active-state");
                            let stepID = step.id;
                            changeSteps(stepID);
                        }
                    }
                })

                if (checkIfAllEmpty(formInfo)) {
                    let stepID = step.id;

                    changeSteps(stepID);
                }
            }
        }
    })
})

const  changeSteps = (stepID) => {
    switch (stepID) {
        case 1: 
            return `
                <div class="form-header">
                    <h1 class="form-title">Personal Info</h1>
                    <h2 class="form-sub-title">Please provide your name, email address, and phone number.</h2>
                </div>
                <form class="form step-one-form" id="form-info">
                    <div class="form-control name">
                        <div class="label-message-container">
                            <label for="name">Name</label>
                            <span class="message">This field is required</span>
                        </div>
                        <input type="text" class="input" id="name" placeholder="e.g. Stephen King">
                    </div>
                    <div class="form-control emaill">
                        <div class="label-message-container">
                            <label for="email">Email Address</label>
                            <span class="message">This field is required</span>
                        </div>
                        <input type="text" class="input" id="email" placeholder="e.g. stephenking@lorem.com">
                    </div>
                    <div class="form-control phone-numberl">
                        <div class="label-message-container">
                            <label for="phone-numberl">Phone Number</label>
                            <span class="message">This field is required</span>
                        </div>
                        <input type="text" class="input" id="address" placeholder="e.g. +1 234 567 890">
                    </div>
                    <span class="message-plan">Plan selection required</span>
                </form>
                <div class="form-footer">
                    <button class="btn-next-step form-submit" id="next-step-2">Next Step</button>
                </div>
            `;
        case 2: 
            return `
                <div class="form-header">
                    <h1 class="form-title">Select your plan</h1>
                    <h2 class="form-sub-title">You have option of monthly or yearly billing</h2>
                </div>
                <div class="form step-two-form" id="form-plans">
                    <div class="step-two-cards">
                        <div class="form-control">
                            <button class="step-two-card">
                                <img src="images/icon-arcade.svg">
                                <div class="card-content">
                                    <span class="card-title plan">Arcade</span>
                                    <span class="card-text year-price">$9/mo</span>
                                    <span class="card-pop-up">2 months free</span>
                                </div>
                            </button>
                        </div>
                        <div class="form-control">
                            <button class="step-two-card">
                                <img src="images/icon-advanced.svg">
                                <div class="card-content">
                                    <span class="card-title plan">Advanced</span>
                                    <span class="card-text year-price">$12/mo</span>
                                    <span class="card-pop-up">2 months free</span>
                                </div>
                            </button>
                        </div>
                        <div class="form-control">
                            <button class="step-two-card">
                                <img src="images/icon-pro.svg">
                                <div class="card-content">
                                    <span class="card-title plan">Pro</span>
                                    <span class="card-text year-price">$15/mo</span>
                                    <span class="card-pop-up">2 months free</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="form-control select-plan">
                        <span class="monthly">Monthly</span>
                        <button class="btn-change-plan">
                            <div class="change-plan"></div>
                        </button>
                        <span class="yearly">Yearly</span>
                    </div>
                    <span class="message-plan">Plan selection required</span>
                </div>
                <div class="form-footer btns-display">
                    <button class="btn-go-back" id="previous-step-1">Go Back</button>
                    <button class="btn-next-step plan-data"  id="next-step-3">Next Step</button>
                </div>
            `;
        case 3: 
            return `
                <div class="form-header">
                    <h1 class="form-title">Pick add-ons</h1>
                    <h2 class="form-sub-title">Add-ons help enhance your gaming experience.</h2>
                </div>
                <form class="form step-three-form" id="form-add-ons">
                    <div class="cards step-three-cards">
                        <div class="form-control step-three-card">
                            <div class="card-content">
                                <input type="checkbox" class="addon-checkbox" id="addon-checkbox-1" name="addon" value="Online services-+$1/mo">
                                <div class="about-add-ons">
                                    <span class="card-title">Online service</span>
                                    <span class="card-text">Access to multiplayer games</span>
                                </div>
                            </div>
                            <span class="card-price">+$1/mo</span>
                        </div>
                        <div class="form-control step-three-card">
                            <div class="card-content">
                            <input type="checkbox" class="addon-checkbox" id="addon-checkbox-2" name="addon" value="Larger storage-+$2/mo">
                                <div class="about-add-ons">
                                    <span class="card-title">Larger storage</span>
                                    <span class="card-text">Extra 1TB of cloud save</span>
                                </div>
                            </div>
                            <span class="card-price">+$2/mo</span>
                        </div>
                        <div class="form-control step-three-card">
                            <div class="card-content">
                            <input type="checkbox" class="addon-checkbox" id="addon-checkbox-3" name="addon" value="Costomizable profile-+$2/mo">
                                <div class="about-add-ons">
                                    <span class="card-title">Costomizable profile</span>
                                    <span class="card-text">Costum theme on your profile</span>
                                </div>
                            </div>
                            <span class="card-price">+$2/mo</span>
                        </div>
                    </div>
                </form>
                <div class="form-footer btns-display">
                    <button class="btn-go-back" id="previous-step-2">Go Back</button>
                    <button class="btn-next-step"  id="next-step-4">Next Step</button>
                </div>
            `;
        case 4: 
            return `
                <div class="form-header">
                    <h1 class="form-title">Finishing up</h1>
                    <h2 class="form-sub-title">Double-check everything looks OK before confirming.</h2>
                </div>
                <form class="form step-four-form" id="form-summary">
                    <div class="cards step-four-cards">
                        <div class="form-control card card-selected-plan">
                            <div class="card-content">
                                <span class="card-title selected-plan">Arcade (Monthly)</span>
                                <a href="#" class="change-plan">Change</a>
                            </div>
                            <span class="card-price sum-num plan-price">+$14/mo</span>
                        </div>
                    
                    </div>
                    <div class="form-control card-total-amount">
                        <div class="card-content">
                            <span class="card-text">Total (per month)</span>
                            <span class="card-price total-price">+$12/mo</span>
                        </div>
                    </div> 
                </form>
                <div class="form-footer btns-display">
                    <button class="btn-go-back" id="previous-step-3">Go Back</button>
                    <button class="btn-confirm">Confirm</button>
                </div>
            `;
    }
    updateFormSteps(stepID);
}

function updateFormSteps(stepID) {
    if (stepID === "step-1") {
        formContent.innerHTML = changeSteps(1);
    } else if (stepID === "step-2") {
        const inputs = document.querySelectorAll(".input");
        
        if (inputs.length < 1) {
            formContent.innerHTML = changeSteps(2);
        } else {
             inputs.forEach(input => {
                if (checkIfEmptyInput(input)) {
                    return false;
                } else {
                    formContent.innerHTML = changeSteps(2);
                }
            });
        }
    } else if (stepID === "step-3") {
        if (inputs.length < 1) {
            formContent.innerHTML = changeSteps(3);
        } else {
             inputs.forEach(input => {
                if (checkIfEmptyInput(input)) {
                    return false;
                } else {
                    if (checkIfSelectedCard()) {
                        return false;
                    } else {
                        btnStep.forEach(step => {
                            step.classList.remove("active-state");

                            if (step.id === "step-3") {
                                step.classList.add("active-state");
                            }
                        })
                        formContent.innerHTML = changeSteps(3);
                    }
                }
            });
        }
    } else if (stepID === "step-4") {
        if (inputs.length < 1) {
            formContent.innerHTML = changeSteps(4);
        } else {
             inputs.forEach(input => {
                if (checkIfEmptyInput(input)) {
                    return false;
                } else {
                    if (checkIfSelectedCard()) {
                        return false;
                    } else {
                        btnStep.forEach(step => {
                            step.classList.remove("active-state");

                            if (step.id === "step-4") {
                                step.classList.add("active-state");
                            }
                        })
                        formContent.innerHTML = changeSteps(4);
                    }
                }
            });
        }
    } 
}

document.addEventListener("click", (e) => {
        if (e.target.id === "next-step-2") {
            const nextStepNumber = e.target.id.split("-")[2];
            const formInfo = document.getElementById("form-info");
            const inputs = document.querySelectorAll(".input");

            inputs.forEach(input => {
                if (checkIfEmptyInput(input)) {
                    return false;
                }
            })

            if (checkIfAllEmpty(formInfo)) {
                stepID = `step-${nextStepNumber}`;
                changeClassNextStep(nextStepNumber);
                checkPlanDuration();
                changePricingPlan();
                checkActiveCard();

                updateFormSteps(stepID);
            }
        } else if (e.target.id === "next-step-3") {
            if (checkIfSelectedCard()) {
                return false;
            } else {
                const nextStepNumber = e.target.id.split("-")[2];

                stepID = `step-${nextStepNumber}`;
                updateFormSteps(stepID)
                changeClassNextStep(nextStepNumber)
            }
        } else if (e.target.id === "next-step-4") {
            const nextStepNumber = e.target.id.split("-")[2];

            stepID = `step-${nextStepNumber}`;
            changeClassNextStep(nextStepNumber)
            updateFormSteps(stepID);
        }
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-go-back")) {
    
        const previousStepNumber = e.target.id.split("-")[2];
        stepID = `step-${previousStepNumber}`;

        changeClassPrevioustStep(previousStepNumber)
        updateFormSteps(stepID);
    }
})

function changeClassNextStep (nextStepNumber) {
    stepID = `step-${nextStepNumber}`;
    const stepItemPrevious = document.getElementById(`step-${nextStepNumber - 1}`);
    const stepItemNext = document.getElementById(stepID);

    stepItemPrevious.classList.remove("active-state");
    stepItemNext.classList.add("active-state");
}

function changeClassPrevioustStep (previousStepNumber) {
    stepID = `step-${previousStepNumber}`;
    const stepItemPrevious = document.getElementById(stepID);
    const stepItemNext = document.getElementById(`step-${parseInt(previousStepNumber) + 1}`);

    stepItemPrevious.classList.add("active-state");
    stepItemNext.classList.remove("active-state");
}
