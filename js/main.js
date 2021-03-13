
var display = document.getElementById('display');
function insert(data) {
    if (display.value == "0") {
        display.value = "";
    }
    var old = display.value;
    display.value = old + data;
}

function reset() {
    if (display.value != "") {
        display.value = "0";
    }
}
function showResult() {
    var result = eval(display.value);
    display.value = result;
}
function back() {
    var old = display.value;
    display.value = old.substr(0, old.length - 1);
}
function root() {
    var result = Math.sqrt(display.value);
    display.value = result;
}

var regex = /^[1][0-9]{3}$/;
function check() {
    var regInp = document.getElementById("regInput");
    alert(regex.test(regInp.value));
    regInp.value = "";
}

