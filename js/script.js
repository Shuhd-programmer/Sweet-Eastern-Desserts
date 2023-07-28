var navbar =document.querySelectorAll(".newnabbar");
var fxPos = document.querySelectorAll(".fx-pos");

for (let index = 0; index < navbar.length; index++) {
    navbar[index].addEventListener("click", function(){
        fxPos[index].classList.toggle("active")
        
    })
    
}