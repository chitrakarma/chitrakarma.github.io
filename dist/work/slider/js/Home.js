function one(id){
    var elem = document.getElementById(id);
    elem.style.height = "20em";
    elem.style.width = "30em";
    elem.style.zIndex = '0';
    elem.style.marginTop = '12%';
    elem.style.marginLeft = '31.5%';
}
function twoLeft(id){
    var elem = document.getElementById(id);
    elem.style.height = "18em";
    elem.style.width = "30em";
    elem.style.zIndex = '-1';
    elem.style.marginTop = '13%';
    elem.style.marginLeft = '22.5em';
}
function twoRight(id){
    var elem = document.getElementById(id);
    elem.style.height = "18em";
    elem.style.width = "30em";
    elem.style.zIndex = '-1';
    elem.style.marginTop = '13%';
    elem.style.marginLeft = '31.5em';
}
function threeRight(id){
    var elem = document.getElementById(id);
    elem.style.height = "16em";
    elem.style.width = "30em";
    elem.style.zIndex = '-2';
    elem.style.marginTop = '14%';
    elem.style.marginLeft = '35.5em';
}
function threeLeft(id){
    var elem = document.getElementById(id);
    elem.style.height = "16em";
    elem.style.width = "30em";
    elem.style.zIndex = '-2';
    elem.style.marginTop = '14%';
    elem.style.marginLeft = '18em';
}
function fourRight(id){
    var elem = document.getElementById(id);
    elem.style.height = "14.5em";
    elem.style.width = "30em";
    elem.style.zIndex = '-3';
    elem.style.marginTop = '15%';
    elem.style.marginLeft = '39em';
}
function fourLeft(id){
    var elem = document.getElementById(id);
    elem.style.height = "14.5em";
    elem.style.width = "30em";
    elem.style.zIndex = '-3';
    elem.style.marginTop = '15%';
    elem.style.marginLeft = '14.3em';
}
function change(id1,id2,id3,id4,id5,id6,id7){
    fourLeft(id1);
    threeLeft(id2);
    twoLeft(id3);
    one(id4);
    twoRight(id5);
    threeRight(id6);
    fourRight(id7);
}
function changeButton(){
    var elem = document.getElementById("mainButton");
    elem.style.transform = "scale(1.2)";
    elem.style.backgroundColor = "#4AB9E6";
    elem.style.cursor = "pointer";
    elem.style.borderColor = "#4AB9E6";
    elem.style.boxShadow = "5px 5px 5px #4AB9E6,5px -5px 5px #4AB9E6,-5px 5px 5px #4AB9E6,-5px -5px 5px #4AB9E6";
    elem.style.color = "white";
}
function changeBack(){
    var elem = document.getElementById("mainButton");
    elem.style.transform = "scale(1)";
    elem.style.backgroundColor = "#A6D7E9";
    elem.style.color = "#4AB9E6";
    elem.style.cursor = "none";
    elem.style.boxShadow = "1px 1px 5px #4AB9E6,1px -1px 5px #4AB9E6,-1px 1px 5px #4AB9E6,-1px -1px 5px #4AB9E6";
}