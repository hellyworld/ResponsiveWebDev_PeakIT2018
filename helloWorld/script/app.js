console.log("it works!");

var allImages = document.querySelectorAll("img");

for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", function() {
    var currentElement = this;
    console.log("clicked on", currentElement);
    currentElement.classList.add("do-flip");
    setTimeout(function() {
      currentElement.classList.remove("do-flip");
    }, 1000);
  });
}