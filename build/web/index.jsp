<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> AMAZON- Login Here </title>

    <link rel="stylesheet" href="css/login.css">
    <!-- favicon -->
    <link rel="icon" href="https://i.pinimg.com/474x/30/66/a0/3066a0cb646942a9542cb6a603c035de.jpg" type="image/jpg" sizes="16x16">
    <!-- header links -->
    <script src="https://kit.fontawesome.com/4a3b1f73a2.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
	<script src="loginToMain.js"></script>
</head>
<body>
	<div class="container">
	  <div class="main">
		<h2>Login to Shop</h2><hr/>
 
		<form id="form_id" method="post" name="myform">
		  <label>User Name :</label></br>
		  <input type="text" name="username" id="username"/></br>
 
		  <label>Password :</label></br>
		  <input type="password" name="password" id="password"/></br>
 
		  <input type="button" value="Login" id="submit" onclick="validate()"/><br/>
		  <input type="button" value="Sign Up to a new Account" id="submit2" onclick="validate2()"/>
		</form>
		
	  </div>
	 
	</div>
 </body>
    

</html>