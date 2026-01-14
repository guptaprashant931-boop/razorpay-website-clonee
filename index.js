const redirectingBtn = document.querySelector("button");
redirectingBtn.addEventListener('click', ()=>{
  window.location.href = "/RazorPay_Login_file/RazorPayLoginPage.html";
})
console.log("redirecting to the login page");

const redirectingSignUpBtn = document.querySelectorAll(".action-btn");
redirectingSignUpBtn.forEach(button =>{
  button.addEventListener('click', ()=>{
  window.location.href = "/RazorPay_SignUp_file/RazorPaySignUpPage.html";
});
});
console.log("redirecting to the Sign up page");

const redirectingSupportBtn = document.querySelector("#navSupport");
// redirectingSupportBtn.addEventListener('click', ()=>{
//   window.location.href = "/Support_Page_File/RazorpaySupportPage.html";
// })



