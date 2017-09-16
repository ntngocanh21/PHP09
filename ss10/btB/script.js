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
// function checkPass(){
//     var regpass = document.getElementById('regPass').value;
//     var reRegPass = document.getElementById("re_regPass").value;
//     if(regpass != reRegPass){
// 		document.getElementById("result").innerHTML="Your pass do not match. Please try again";
// 		return false;
// 	}
// 	else{
// 		document.getElementById("result").innerHTML=null;
// 		if(regPass.length < 6){
// 			document.getElementById("result").innerHTML="Passwords must be at least 6 characters";
// 			return false;
// 		}
// 		else{
// 			document.getElementById("result").innerHTML=null;
// 			return true;
// 		}
// }
function dayOptionCreate() {
 	select = document.getElementById("day");
  	for (var i = 0; i<=31; i++){
        var opt = document.createElement("option");
        opt.value = opt.text = i;
        select.add(opt);
    }
}
function yearOptionCreate() {
 	select = document.getElementById("year");
  	for (var i = 1970; i<=2017; i++){
        var opt = document.createElement("option");
        opt.value = opt.text = i;
        select.add(opt);
    }
}

 function solve() {
	checkEmail();
	checkField('firstname');
	checkField('lastname');
	checkField('regEmail');
	checkField('regPass');
	checkField('re_regPass');
}


