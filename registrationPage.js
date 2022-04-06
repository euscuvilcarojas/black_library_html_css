$(function(){
    $("#header").load("./Includes/topHeader.html"); 
    $("#footer").load("./Includes/botFooter.html"); 
});

function loginSuccessful(){
    if(document.getElementById("loginEmail").value == "testEmail@mail.com" && document.getElementById("passwordExistingUser").value == "testPassword"){
        alert("Login Successful");
        window.open("./workInProgress.html");
    }
    else{
        alert("Incorrect Email or Password");
    }
}


function load() {
    document.getElementById("registrationForm").addEventListener("submit", validate, false);
}


function validate(e) {
    //	Determine if the form has errors
    if (formHasErrors()) {
      // 	Prevents the form from submitting
      e.preventDefault();
      // Set focus to the first text field on the page
      return false;
    }
    document.getElementById("errorLabel").style.display = "none";
    alert("Registration process successful");
    return true;
  }
  

function focusElement(id, message){
    document.getElementById("errorLabel").textContent = message;
    document.getElementById("errorLabel").style.display = "block";
    document.getElementById(id).focus();
}

function formHasErrors() {
    //Error flag
    let errorFlag = false;
    let regExPostalCode = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //Validate the fields
    if (!regExEmail.test(document.getElementById("registrationEmail").value)) {
        focusElement("registrationEmail", "Errors within email field");
        errorFlag = true;
    } else if(!isNaN(document.getElementById("firstName").value)){
        focusElement("firstName", "Errors within first name field");
        errorFlag = true;
    } else if(!isNaN(document.getElementById("lastName").value)){
        focusElement("lastName", "Errors within last name field");
        errorFlag = true;
    } else if(document.getElementById("country").value == ""){
        focusElement("country", "Errors within country field");
        errorFlag = true;
    } else if(document.getElementById("addressLine01").value.length <= 2){
        focusElement("addressLine01", "Errors within addressLine01");
        errorFlag = true;
    } else if(document.getElementById("city").value.length <=2 || !isNaN(document.getElementById("city").value )){
        focusElement("city", "Errors within city field");
        errorFlag = true;
    } else if(!regExPostalCode.test(document.getElementById("zipCode").value)){
        focusElement("zipCode", "Please insert a valid ZipCode");
        errorFlag = true;
    } else if(document.getElementById("password").value.length <=9){
        focusElement("password", "Password field should be at least 10 digits long");
        errorFlag = true;
    } else if(document.getElementById("passwordConfirm").value.length <=9){
        focusElement("passwordConfirm", "Confirm Password field should be at least 10 digits long");
        errorFlag = true;
    } else if(document.getElementById("password").value != document.getElementById("passwordConfirm").value){
        focusElement("password", "Password and Confirm password should be the same");
        errorFlag = true;
    }
    return errorFlag;
}

// Add document load event listener
document.addEventListener("DOMContentLoaded", load);
