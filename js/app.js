//Get input
var input= document.getElementById("input");
input.addEventListener("keyup", keyUp);

function keyUp(){
   value =input.value.toUpperCase() ;
  

   

//Get list elements
   var ul= document.getElementById("list");
   var li=ul.querySelectorAll("li#field");
   

   for (i=0; i<li.length;i++){
   var names = li[i].getElementsByTagName("a")[0];
   

   if(names.innerHTML.toUpperCase().match(value) != null){
       li[i].style.display="";

   }
   else{
    li[i].style.display="none";
   }
}}




