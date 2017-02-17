function dropdownfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}



// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Function to copy address

function addresscheck(a) {
    if (a.checkAddress.checked == true) {
        a.addressc.value = a.addressp.value;

    }
}


function Validate_form(){
  if(Validate_func()){
    return addtolist();
  }
  
}




function Validate_func(){

  if (Validate_name() && Validate_email() && Validate_phone() && Validate_password()){
    return true;
  }
  return false;
}




function Validate_name() {
    var name = document.forms["RegisterationForm"]["firstname"].value;
    if (name == "") {
        alert("Please fill the First name");
        document.RegisterationForm.firstname.focus();
        return false;

    }
    regex = /^[a-zA-Z]+$/;
    if (!regex.test(document.RegisterationForm.firstname.value)) {
        alert("only contain  alphabets");
        document.RegisterationForm.firstname.focus();
        return false;
    }
    return true;
}










//function to validate email_id


function Validate_email() {
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(document.RegisterationForm.emailid.value)) {
      alert("You have entered an invalid email address!")
      return false;
  }
return true;
}


//function to validate phone no.


function Validate_phone(){
  var phone = document.RegisterationForm.phoneno.value;
  if(isNaN(phone)){
    alert("Phone number should be of 10 digits");
    phone.focus();
    return false;
  }
  if ((phone.length<9) || (phone.length > 10)){
    alert("Your mobile number must be 1 to 10 integers");
    document.RegisterationForm.phoneno.select();
    return false;
  }
return true;
}





//Function to validate password


function Validate_password(){

  var pass = document.RegisterationForm.Password.value,
      passc = document.RegisterationForm.confirmpassword.value;
      if(pass!= passc){
        alert("Error: Both the password must be same");
        pass.focus();
        return false
      }

if(pass != "" && pass == passc) {
      if(pass.length < 8) {
        alert("Error: Password must contain at least eight characters!");
        pass.focus();
        return false;
      }


}
var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
if(!re.test(pass)){
  alert("Password must be valid with characters");
  pass.focus();
  return false;
}
return true;
}



//Function to append to dashboard


function addtolist() {

    var node = document.createElement("li");
    var text = document.getElementById("firstname").value;
    var mail = document.getElementById("emailid").value;
     node.setAttribute('title', mail);
    //node.setAttribute("title", emailid);
    node.innerHTML = text; //it is not textNode it is only text value that will be returned
    document.getElementById("mylist").appendChild(node);

}








