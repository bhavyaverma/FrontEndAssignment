$('#register').click(function(){
	 $('#dashboard').append('<li id="mylist" title="' + $('#emailid').val() + '"> ' + $('#firstname').val() + ' ' +
        $('#lastname').val() + '</li>')
});

$('body').on('click','#mylist', function(){
			alert("Added on dashboard");
		});



function Validate_main(){
	if(valname && valemail && valphone && valpassword && valcpassword){

	$('#register').prop('disabled', false);


	}else{
		$('#register').prop('disabled', true);


	}

}


$("#firstname").blur(function(){
	var valname = false;
    if ( $(this).val().match('^[a-zA-Z]+$') ) {
       return true;
   } else if{
       alert("That's not a name");
       return false;
   }	else {
   	valname = true;
   }

});

$(":checkbox").click(function(){
		$("#addressc").val($("#addressp").val());
		return true;
	
		
});


$("#emailid").blur(function(){
	var valemail = false;
	var mail = $('#emailid').val();
	if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(mail)) {
      alert("Email id is not valid");
      return false;
  } else if {
  	return true;
  } else {
  	valemail = true;
  }
});


$("#phoneno").blur(function(){

	var valphone = false;
	var phone = $("#phoneno").val();

	if(phone = "")
	{

		alert("Phone number cannot be empty");
		return false;
	} else if(isNaN(phone)) {
    
    alert("Phone number should be integer value");
    return false;

  } else  if(phone.length != 9){
  	alert("Phone number should be minimum of 10 digits");
  	return false;
  } else if{
  	return true;	
  } else{
  	valphone = true;
  }
  
  
  

});



$("#password").blur(function(){

	var valpassword = false;
	var pass = $("#password").val();
	var cpass = $("#confirmpassword").val();
	var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
	if(!re.test(pass)){
 		alert("Password must contain minimum 1 different character, 1 character capital, 1 numeric value");
		return false;
 	}else if {
 		return true;
 	}else{
 		valpassword = true;
 	}

	});



	$("#confirmpassword").blur(function(){
		var valcpassword = false;
		var pass = $("#password").val();
	var cpass = $("#confirmpassword").val();

		if(pass != cpass){
			alert("Passwords must be same");
			return false;
	 	}else if {
	 		return true;
	 	
	}else {
		valcpassword = true;
	}



});

















