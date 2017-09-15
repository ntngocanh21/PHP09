function changeBoder(id,color) {
	document.getElementById(id).style.border = "'1px solid "+color+ "';"
}
function checkEmail() {
    var email = document.getElementById('regEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
	    document.getElementById('result').innerHTML = "please enter a valid email adress"
	    email.focus;
	    return false;
	}
 }
function checkPass(){
	var pass = document.getElementById('regPass');
	var filter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
	if (!filter.test(pass.value)) {
	    document.getElementById('result').innerHTML = "please enter a valid pass"
	    pass.focus;
	    return false;
	}
    return re.test(str);
}
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
	checkPass();
}


