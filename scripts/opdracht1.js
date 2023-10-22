// Put your code here
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

var step1 = document.getElementById("step1");
var step2 = document.getElementById("step2");

var step1Form = document.getElementById("step1Form");
var step2Form = document.getElementById("step2Form");

var sName = document.getElementById("show--name");

step1Form.addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var submit = document.querySelector(".trigger--step2");

    name.classList.remove("error");
    email.classList.remove("error");

    if (name.value === "") {
        name.classList.add("error");
    }
    if (email.value === "" || !isValidEmail(email.value)) {
        email.classList.add("error");
    }
    if (name.value !== "" && email.value !== "" && isValidEmail(email.value)){
        
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
        sName.textContent = name.value;
    }
});

var box= document.getElementById("box");
step2Form.addEventListener("submit", function(event){
    event.preventDefault();
    
    var preference = document.getElementById("preference").value;
    box.classList.remove("box.orange", "box.green", "box.yellow", "box.blue", "box.red");

    switch(preference){
        case "orange":
            box.classList.add("box.orange");
            break;
        case "green":
            box.classList.add("box.green");
            break;
        case "yellow":
            box.classList.add("box.yellow");
            break;
        case "blue":
            box.classList.add("box.blue");
            break;
        case "red":
            box.classList.add("box.red");
            break;
        
        default:
            alert("Choose 1");
            break;
    }

    var submitButton = document.querySelector('input[value="Verzenden"]');
    submitButton.addEventListener("click", function(){
        alert("bedankt voor je inzending");
    })

})
