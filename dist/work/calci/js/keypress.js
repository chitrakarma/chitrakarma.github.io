var a = new Array();
var m=65;
for(var i=0;i<26;i++){
    a[i]=m;
    m++;
}
var b = new Array();
for(var j=0;j<26;j++){
    b[j]=String.fromCharCode(a[j]);
}
document.addEventListener('keydown',function(event){
    for(var i=0;i<a.length;i++){
        if(event.keyCode==a[i]){
            document.getElementById("input").value += b[i];
        }
    }
});