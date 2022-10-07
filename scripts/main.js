var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var volgende1 = document.getElementById("volgende1");
var volgende2 = document.getElementById("volgende2");
var vorige1 = document.getElementById("vorige1");
var vorige2 = document.getElementById("vorige2");

var progress = document.getElementById("progress");

volgende1.onclick = function (){
    form1.style.left = "-400px";
    form2.style.left = "5px";
    progress.style.width = "240px";
}

vorige1.onclick = function (){
    form1.style.left = "5px";
    form2.style.left = "400px";
    progress.style.width = "120px";
}

volgende2.onclick = function (){
    form2.style.left = "-400px";
    form3.style.left = "5px";
    progress.style.width = "360px";
}

vorige2.onclick = function (){
    form1.style.left = "-400px";
    form2.style.left = "5px";
    form3.style.left = "400px";
    progress.style.width = "240px";

}