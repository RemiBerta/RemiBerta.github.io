const burgerButton = document.getElementsByClassName("burger")[0];
const mainMenu=document.getElementsByClassName("main-menu")[0];
const closeBtn = document.getElementById("closeBtn")


burgerButton.addEventListener("click", function(){
    mainMenu.style.display= "block";
});


closeBtn.addEventListener("click", function(event) {
    event.preventDefault();
    mainMenu.style.display ="none";
});