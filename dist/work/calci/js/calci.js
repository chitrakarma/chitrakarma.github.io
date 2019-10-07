var para, one, two; 
function enter(id){
    document.getElementById("field").value += document.getElementById(id).value;
}
function clr(){
    document.getElementById("field").value = "";
}
function eql(){
    try{
        document.getElementById("field").value = eval(document.getElementById("field").value);
    }
    catch(eql){
        document.getElementById("field").value = "Error";
    }
}
function del(){
    var str = document.getElementById("field").value;
    var n = document.getElementById("field").value.length;
    document.getElementById("field").value = str.substr(0,n-1);
}
