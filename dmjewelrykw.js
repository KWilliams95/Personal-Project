(function() {
   var button = document.querySelector("#navigation-button");
   var nav = document.querySelector("#navigation-items");
   button.addEventListener("click", function(e) {
     e.preventDefault();
     nav.classList.contains("navigation-items--visible") ? nav.classList.remove("navigation-items--visible") : nav.classList.add("navigation-items--visible");
   });
 })();

function toggleDarkMode(){
 let background = document.getElementById("body");

 if (background.style.background =='black'){
   background.style.background = 'Lavender'
 }
 else {
   background.style.background ='black';
 }
}
