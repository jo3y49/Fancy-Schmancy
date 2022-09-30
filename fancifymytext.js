const big=document.querySelector("Bigger!");
const fancy=document.querySelector("radio");
const moo=document.querySelector("Moo");

function makeBigger(){
    document.getElementById("text").style.fontSize="24pt";
}
function makeFancy(){
    if (document.getElementById("fancy").checked){
        document.getElementById("text").style.fontWeight="bold";
        document.getElementById("text").style.color="blue";
        document.getElementById("text").style.textDecoration="underline";
    }else if(document.getElementById("boring").checked){
        document.getElementById("text").style.fontWeight="normal";
        document.getElementById("text").style.color="black";
        document.getElementById("text").style.textDecoration="none";
    }
}
function makeMoo(){
    let str = document.getElementById("text").value.toUpperCase();
    let parts = str.split(".");
    str = parts.join("-Moo.");
    document.getElementById("text").value = str;
}

big.onclick = () => makeBigger;
fancy.onchange = () => makeFancy;
moo.onclick = () => makeMoo;