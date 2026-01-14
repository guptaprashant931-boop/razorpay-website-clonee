const continueBtn = document.querySelector("#login");
const inputBar = document.getElementById("enterEmail");
const inputRes = document.querySelector("#inputRes");

continueBtn.addEventListener('click',()=>{
    if (inputBar.value === ""){
        inputRes.innerHTML = "&#9432<i> Please enter a valid email or phone number</i>";
        
    }
})
console.log("Clicking on continue")