function checkField(id){
	function changeBorder(id,color){
		document.getElementById(id).style.border="1px solid "+color;
	}

	var firstname = document.getElementById(id).value;
	if(firstname==""){
		changeBorder(id,"red");
		return false;
	}
	else{
		document.getElementById(id).style.border="1px solid #bdc7d8";
	}	
}	
function checkEmail() {
    var email = document.getElementById('regEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
	    document.getElementById('result').innerHTML = "Please enter a valid email adress"
	    email.focus;
	    return false;
	}
	else{
		document.getElementById('result').innerHTML = null;
	}
}

function checkPass(){
    var regpass = document.getElementById('regPass').value;
    var reRegPass = document.getElementById('re_regPass').value;
    if(reRegPass != regpass){
		document.getElementById("result").innerHTML="Your pass do not match. Please try again";
		return false;
	}
	else{
		document.getElementById("result").innerHTML=null;
		if(regPass.length < 6){
			document.getElementById("result").innerHTML="Passwords must be at least 6 characters";
			return false;
		}
		else{
			document.getElementById("result").innerHTML=null;
			return true;
		}
	}
}
function dayOptionCreate() {
 	select = document.getElementById("day");
  	for (var i = 2; i<=31; i++){
        var opt = document.createElement("option");
        opt.value = opt.text = i;
        select.add(opt);
    }
}

var optionText = "<option>Year</option>";
var selectedYear = "";
for (var i =1970; i<=2017; i++){
	selectedYear = (i==1999)?"selected":"";
	optionText+= "<option value='"+i+"'"+selectedYear+">"+i+"</option>";

}
document.getElementById("year").innerHTML = optionText;

// select = document.getElementById("year");
//   	for (var i = 1970; i<1999; i++){
//         var opt = document.createElement("option");
//         opt.value = opt.text = i;
//         select.add(opt);
//     }
//     var opt = document.createElement("option");
//         opt.value = opt.text = 1999;
//         opt.selected = "1";
//         select.add(opt);
//     for (var i = 2000; i<=2017; i++){
//         var opt = document.createElement("option");
//         opt.value = opt.text = i;
//         select.add(opt);
//     }

 function solve() {
	checkEmail();
	checkField('firstname');
	checkField('lastname');
	checkField('regEmail');
	checkField('regPass');
	checkField('re_regPass');
	checkEmail();
	// checkPass();
}


