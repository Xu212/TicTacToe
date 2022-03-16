window.addEventListener("load", init);
function init(){
    var txt="";
    for (let index = 0; index < 9; index++) {
        txt += "<div class='elem'></div>"
        
    }
    document.getElementById("jatek").innerHTML=txt;
    var elemtomb = document.querySelectorAll(".elem");
    var element = document.getElementsByClassName("elem");
    //var positionInfo = element[0].getBoundingClientRect();
    var positionInfo = window.getComputedStyle(element[0]);
    var meret = positionInfo.width;
    for (let index = 0; index < elemtomb.length; index++) {
        elemtomb[index].style.backgroundColor="red";
        document.getElementsByClassName("elem")[index].style.height=meret;
    }
    for (let index = 0; index < elemtomb.length; index++) {
        elemtomb[index].addEventListener("click", kattintas)
        
    }
}
var lepes = 0;
function kattintas(){
    if(lepes % 2 === 0){
        event.target.innerHTML="0";
    }
    else{
        event.target.innerHTML="X";
    }
    lepes++;đ
    event.target.removeEventListener("click", kattintas);
    event.target.removeEventListener("mouseover", hatterFel);
    event.target.removeEventListener("mouseout", hatterLe);
}
function hatterFel(){
    
}