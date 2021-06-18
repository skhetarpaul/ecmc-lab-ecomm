var attempt = 3; //Variable to count number of attempts

//Below function Executes on click of login button
function validate(){
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var confirm = document.getElementById("confirm").value;

	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var test = re.test(String(email).toLowerCase());
	if (test===false) {
		alert('Please enter a valid email address')
		return false;
	}
	if ( password==confirm){
		alert("Successfully signed up an account")
		
		window.location = "MainPage.html"; //redirecting to other page
		return false;
	}
	else{
		attempt --;//Decrementing by one
		alert("You have left "+attempt+" attempt; Please enter same value at password and confirm password");
		
		//Disabling fields after 3 attempts
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementById("confirm").disabled = true;
			document.getElementById("email").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}