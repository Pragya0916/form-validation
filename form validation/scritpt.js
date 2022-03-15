function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }

}
function validateForm(){
 clearErrors();
    let Fname = document.getElementById("fname").value;
    let Lname= document.getElementById("lname").value;
    let Num = document.getElementById("num").value;
    let Email  = document.getElementById("email").value;
    let Pass = document.getElementById("pass").value;
    let Cpass= document.getElementById("cpass").value;
    

if(Fname.length === 0){
    document.getElementById("ferror").innerHTML = " *Please Enter First Name";
    return false;
}
if(Lname.length === 0){
    document.getElementById("lerror").innerHTML = " *Please Enter Last Name";
    return false;
}
if (Num.length != 10){
    document.getElementById("numErr").innerHTML = "*Phone number should be of 10 digits!";
    return false;
}
if (Num.length != 10){
    document.getElementById("numErr").innerHTML = "*Phone number should be of 10 digits!";
    return false;
}
if (Email.length === 0){
    document.getElementById("emailErr").innerHTML = "*Please Enter valid Email including '@' "; 
    return false;
}
if (Pass.length < 8){
    document.getElementById("passErr").innerHTML = "*Password must conatain atleast 8 characters";
    return false;
}
if (Cpass!= Pass){
    document.getElementById("cpassErr").innerHTML = "*Password and Confirm password should match!";
    return false;
}

}