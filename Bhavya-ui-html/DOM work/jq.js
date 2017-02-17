
$('document').ready(function(){
	var fname = false;
	var email = false;
	var phone = false;
	var pass = false;
	var cpass = false;


	

	$("#firstname").blur(function(){
		if ( $(this).val().match('^[a-zA-Z]+$') ) {
			fname = true;
		} else {
			alert("That's not a name");
			return false;
		}

	});

	$(":checkbox").click(function(){
		// var add = document.getElementById("addressp"),
		// 	addc = document.getElementById("addressc");
		$("#addressc").val($("#addressp").val());
	});

	$("#emailid").change(function(){

		var mail = $('#emailid').val();
		if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(mail)) {
			alert("Email id is not valid");
		}
		email = true;
	});


	$("#phoneno").change(function(){
		var phone = $("#phoneno").val();
		if(phone == '')
		{
			alert("Phone number cannot be empty");
		} else if(isNaN(phone)) {
			alert("Phone number should be integer value");
		} else  if(phone.length != 10){
			alert("Phone number should be minimum of 10 digits");
		}
		phone = true;
	});


	$("#password").change(function(){
		var pass = $("#password").val();
		var cpass = $("#confirmpassword").val();
		var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		if(!re.test(pass)){
			$("#password").focusout();
			alert("Password must contain minimum 1 different character, 1 character capital, 1 numeric value");
		}
		pass = true;
	});

	$("#confirmpassword").change(function(){
		var pass = $("#password").val();
		var cpass = $("#confirmpassword").val();

		if(pass != cpass){
			alert("Passwords must be same");
		}
		cpass = true;
	});


	$("#register").click(function(){
		if('fname' && 'email' && 'phone' && 'pass' && 'cpass')
		{
			$('#register').prop('disabled', false);
		}else{
			$('#register').prop('disabled', true);
		}
	});

	// $('body').on('click','#mylist', function(){
	// 		alert("Added on dashboard");
	// 	});

	$('#register').click(function() {
    $('#right').append('<span class="mylist" title="' + $('#emailid').val() + '"> ' + $('#firstname').val() + ' ' +
        $('#lastname').val() + '</span>')

});

});


