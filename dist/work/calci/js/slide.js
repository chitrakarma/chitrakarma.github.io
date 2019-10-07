var index = 0;
function carousel() {
    var arr = ["one","two","three","four"];
    for(var i=0;i<arr.length;i++){
        var x = document.getElementById(arr[i]);
        x.style.display = "none";
    }
    var x = document.getElementById(arr[index]);
    x.style.display = "block";
    index++;
    if(index>3){
        index=0;
    }
    setTimeout(carousel,2000);
}