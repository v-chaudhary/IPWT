function validate_check_box(str)
{
    var var1=document.getElementById("cricket");
    var var2=document.getElementById("netsurfing");
    var var3=document.getElementById("reading");

    if (var1.checked==false && var1.checked==false && var3.checked==false)
    {
        alert("Please select a hobby");
        return false;
    }
    else
    {
        return true;
    }
}

function validate_multiple_list(str)
{
    if (document.getElementById(str).selectedIndex == -1)
    {
        alert("Select a field from "+ str);
        return false;
    }
}

function validate_date()
{
    var i=document.getElementById("bday").value;
    var j=i.split("-");
    //alert(j);
    if (j[0]<1980 || j[0]>1995)
    {
        alert("Year must be between 1980 to 1995");
        return false;
    }
    else
    {
        return true;
    }
}

function validate_email()
{
    var x = document.forms["myform"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
}

function validate_list()
{
    var inputVal = document.getElementById("color");
    var curform = document.getElementById("myform");

    if (inputVal.value == "") 
    {
        alert("Please select a color");
    }
    else if (inputVal.value !="")
    {
        curform.style.backgroundColor=inputVal.value;
    }
}

function validate_gender()
{
	var genderM=document.getElementById("male");
	var genderF=document.getElementById("female");

	if (genderM.checked==false && genderF.checked==false)
	{
		alert("Select male or female");
		return false;
	}
    else
    {
        return true;
    }
}

function validate_number(str)
{
	var inputVal = document.getElementById(str);
	//if (inputVal.value == "") 
    //{
      //  inputVal.style.backgroundColor = "red";
    //}
    //else
    //{
    	var regEx=/^[1-9][0-9]+$/;
    	if ( inputVal.value.length == "8" || inputVal.value.length=="10")
    	{
            if (inputVal.value.match(regEx))
            {
                //inputVal.style.backgroundColor = "lightgreen"; 
                return true;  
            }
            else
            {
               // inputVal.style.backgroundColor = "red";
               alert(inputVal.name + " Only numbers are allowed..!");
                return false;
            }
    	}
    	else
    	{
    		//inputVal.style.backgroundColor = "red";
                 alert("Registration No must be of 8 digit1..!");
                return false;
    	}
    //}
    
}

function validate_password()
{
	var pass=document.getElementById("password");
	var repass=document.getElementById("repassword");

    if (pass.value!=repass.value)
	{
		//repass.setCustomValidity("Passwords Don't Match");
        alert("Passwords not matched");
		//repass.style.backgroundColor="red";
        return false;
	}
	else
	{
		// repass.setCustomValidity("Password Matched");
        return true;
	}
}

function validate_name(str)
{
    var inputVal = document.getElementById(str);
   // if (inputVal.value == "") 
    //{
      //  inputVal.style.backgroundColor = "red";

    //}
    //else
    //{
     	var regEx= /^[a-zA-Z][a-zA-Z]+$/;

    	if (inputVal.value.match(regEx))
    	{
    		//inputVal.style.backgroundColor = "lightgreen";
            return true;
    	}
    	else
    	{
    		//inputVal.style.backgroundColor = "red";
            alert("Not a valid name!");
            return false;
    	}
    //}
}