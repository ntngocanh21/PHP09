function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
	    alert('Please input a valid email address');
	    email.focus;
	    return false;
	}
 }
function checkNumber()
{
	if(document.getElementById("adults").value < document.getElementById("children").value)
	{
		alert("The number of children is not greater than the number of adults");
	}
	else if(document.getElementById("adults").value == 0)
	{
		alert("The number of adults must > 0 ");
	}
}
function convertMonth(month) {
	if(month < 10) {
		return "0"+month;
	}else{
		return month;
	}
}
function checkDay()
{
	var arrivalDate = document.getElementById("arrivalDate").value;
	var departureDate = document.getElementById("departureDate").value;
	var date = new Date();
	
	dateNow = date.getFullYear() +"-" + convertMonth((date.getMonth() + 1)) +"-" +  date.getDate();
	console.log(arrivalDate);
	console.log(departureDate);
	console.log(dateNow);
	if( arrivalDate < dateNow )
		alert("Arrival date must be greater than or equal to the current date");
	
	if( departureDate < arrivalDate )
		alert("The departure date must be greater than or equal to the arrival date");
}
function changeImage(){
	var gender = document.getElementById("chooseGender").value;
	var color = document.getElementById("color").value;
	document.getElementById("imageGender").style.border = "3px solid"+color;
	if(gender == "mr"){
		document.getElementById("imageGender").src = "boy.jpg";
	}else{
		document.getElementById("imageGender").src = "girl.jpg";
	}
}
function getInfo(name, width){
	document.getElementById("imageChange").src = name;
	document.getElementById("imageChange").style.width = width + "px";
}
function solve()
{
	changeImage();
	checkEmail();
	checkNumber();
	checkDay();


}

