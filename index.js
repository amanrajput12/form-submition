var username = document.getElementById("username");
var  emailval = document.getElementById("email");
var passwordval = document.getElementById("password");
var confirmpasswordval = document.getElementById("confirmpassword");
var btn = document.getElementById("submitbtn");



btn.addEventListener("click", value);   



function value(){
let user = username.value;
let email = emailval.value;
let password = passwordval.value;
let confirmpassword = confirmpasswordval.value;

if(user == ""){
    document.getElementById("usernameInput").innerHTML = "please fill the input value" ;
  return false;

}
if((user.length<=2)  ||  (user.length>=20)) {
    document.getElementById("usernameInput").innerHTML = "please fill the valid username" ;
    return false;
}
if(!isNaN(user)){
    document.getElementById("usernameInput").innerHTML = "only characters are allowed" ;
    return false;
}
 
if(email== ""){
    document.getElementById("emailInput").innerHTML = "please fill the email" ;
}

if(email.indexOf("@")<=0) {
    document.getElementById("emailInput").innerHTML = "@ Invalid position" ;
    return false;
}
if((email.charAt(email.length-4)!=".")&& (email.charAt(email.length-3)!=".")){
    document.getElementById("emailInput").innerHTML = ". Invalid position" ;
    return false;
}

if(password==""){
    document.getElementById("passwordInput").innerHTML = "please fill the password value" ;
    return false;
}
if((password.length<=5)||(password.length>15)){
    document.getElementById("passwordInput").innerHTML = "please enter valid password" ;
    return false; 
}
if(password!=confirmpassword){
    document.getElementById("confirmpasswordInput").innerHTML = "password are not maching" ;
    return false;
}
}

