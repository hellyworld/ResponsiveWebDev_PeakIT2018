console.log("js loaded");

loadHeader();
loadFooter();
insertFavicon();

var allImages = document.querySelectorAll("img");
//clasic for loop
for (var i = 0; i < allImages.length; i++) {
  allImages[i].addEventListener("click", handleImageClick);
}

var allCatImages = document.querySelectorAll("#cat-container img");
//ES6 syntax
allCatImages.forEach(catImage => {
  catImage.addEventListener("click", handleCatClick);
});

var allDogImages = document.querySelectorAll("#dog-container img");
allDogImages.forEach(dogImage => {
  dogImage.addEventListener("click", handleDogClick);
});

/**
 * Event handlers implementations
 */
function handleImageClick() {
  //debugger;
  var currentElement = this;
  console.log("clicked on", currentElement);
  animateElement(currentElement);
}

function handleCatClick() {
  var audio = new Audio("./media/meow.mp3");
  audio.play();
  vibrate();
}

function handleDogClick() {
  var audio = new Audio("./media/bark.mp3");
  audio.play().then(function() {
    alert("bark!");
    vibrate();
  });
}

/**
 * Helper functions
 */
function vibrate() {
  //enable vibration
  navigator.vibrate =
    navigator.vibrate ||
    navigator.webkitVibrate ||
    navigator.mozVibrate ||
    navigator.msVibrate;
  window.navigator.vibrate([200, 100, 200]);
}

function animateElement(currentEl){
  currentEl.classList.add("do-flip");
  setTimeout(function() {
    currentEl.classList.remove("do-flip");
  }, 1000);
}

function goingHome() {
  window.location.href = window.location.href.substring(
    0,
    window.location.href.indexOf("helloWorld")
  );
}