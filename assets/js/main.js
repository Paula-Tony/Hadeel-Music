const readmoreButtons = document.querySelectorAll(".excerpt .read-more");

readmoreButtons.forEach(function(button) {
  button.addEventListener("click", function(){
    button.nextElementSibling.style.display = "inline";
    button.style.display = "none"
  })
})


