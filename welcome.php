<?php 
	//echo $_POST;
	//var_dump($_POST);
	echo "<h1>Name:".$_POST["firstname"]." ".$_POST["lastname"];
	echo "<br><h2>Gender:".$_POST["gender"];
	echo "<br><h2>Registration No:".$_POST["registrationno"];
	echo "<br><h2>E-mail Id:".$_POST["email"];
	echo "<br><h2>Password:".$_POST["password"];
	
	echo "<br><h2>Date Of Birth:".$_REQUEST["bday"];
	echo "<br><h2>Age:".$_REQUEST["age"];
	echo "<br><h2>Phone No:".$_POST["phoneno"];
	echo "<br><h2>Background Color:".$_REQUEST["color"];
	$subjects=$_REQUEST["subjects"];
	echo "<br><h2>Subjects:".$subjects[2];
	$hobbies = $_REQUEST["hobbies"];
	echo "<br><h2>Hobbies:".$hobbies[1];
	
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="";
	
	$conn=mysql_connect($dbhost,$dbuser,$dbpass) or die("Error in connection to database");
	
	$dbname="ipwt";
	mysql_select_db($dbname);
	
	$firstname=$_POST["firstname"];
	$registrationno=$_POST["registrationno"];
	$gender=$_POST["gender"];
	$email=$_POST["email"];
	$bday=$_REQUEST["bday"];
	
	$query ="INSERT INTO user(User_Name,Reg_No,Gender,E_mail,D_O_B) VALUES ('$firstname','$registrationno','$gender','$email','$bday')";
	
	$succ=mysql_query($query);
	if ($succ===True)
	{
		echo "<br>record saved successfully";
	}
	else
	{
		echo "query failed";
	}
	
	mysql_close($conn);
?>