btn1.onclick = () => document.body.style.backgroundColor = "blue";
btn2.onclick = () => document.body.style.backgroundColor = "red";
btn3.onclick = () => document.body.style.backgroundColor = "#2fd2f7";
btn4.onclick = () => document.body.style.backgroundColor = "orange";
btn5.onclick = () => document.body.style.backgroundColor = "pink";
btn6.onclick = () => document.body.style.backgroundColor = "black";
btn7.onclick = () => document.body.style.backgroundColor = "yellow";
btn8.onclick = () => document.body.style.backgroundColor = "green";

btn101.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "blue";
    }
    }

btn102.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "red";
    }
    }

btn103.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "#2fd2f7";
    }
    }

btn104.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "orange";
    }
    }
btn105.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "pink";
    }
    }

btn106.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "black";
    }
    }

btn107.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "yellow";
    }
    }

btn108.onclick = () => {
    var x = document.getElementsByClassName("texte");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.color = "green";
    }
    }

btn201.onclick = () => {
    var x = document.getElementsByClassName("imgs");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.height = "100px";
    }
    }
    
btn202.onclick = () => {
    var x = document.getElementsByClassName("imgs");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.height = "200px";
    }
    }


ee.onclick = () => {
    document.body.style.display = "none"
}

b2.onclick = () =>{
    var x = document.getElementsByClassName("op");
    var i;
    for (i = 0; i<x.length; i++) {
    x[i].style.opacity = "100%";
    }
    document.getElementById("un").style.zIndex = "2";
    var elem = document.getElementById('efs');
    elem.parentNode.removeChild(elem);
}

