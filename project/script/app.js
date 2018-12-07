document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  loadHeader();
  loadFooter();

  document.addEventListener(
    "headerLoaded",
    function(e) {
      console.log("header loaded");
    },
    false
  );
  document.addEventListener(
    "footerLoaded",
    function(e) {
      console.log("footer loaded");
    },
    false
  );

  //models
  var getJokeButton = document.querySelector("#getJoke");

  function chuckNorrisModel(fName, lName) {
    this.firstName = fName || "Chuck";
    this.lastName = lName || "Norris";
  }

  //event listeners
  getJokeButton.addEventListener("click", getJokeFromServer);

  function getJokeFromServer() {
    var firstNameVal = document.querySelector("#firstName").value;
    var lastNameVal = document.querySelector("#lastName").value;

    var isSafeForWork =  document.querySelector("#filderMature").checked;
    var isOnlyNerdy =  document.querySelector("#onlyNerdy").checked;

    var myChuckNorris = new chuckNorrisModel(firstNameVal, lastNameVal);

    var url = new URL("https://api.icndb.com/jokes/random/");

    console.dir(url);

    var exludedCathegories = isSafeForWork ? "[explicit]" : null;
    
    var params = {
      firstName: myChuckNorris.firstName,
      lastName: myChuckNorris.lastName,
      exclude: exludedCathegories
    }
    
    if(isOnlyNerdy){
      params.limitTo = "[nerdy]";
    }

    url.search = new URLSearchParams(params);

    fetch(url)
      .then(function(response) {
        console.log("initial response: ", response);
        return response.json();
      })
      .then(function(jsonResponse) {
        console.log("json response: ", jsonResponse);
        displayJoke(jsonResponse);
      });
  }

  function displayJoke(joke) {
    console.log('jike container',  document.querySelector('#jokeContainer p#actualJokeFromServer'));
    document.querySelector("#jokeContainer p#actualJokeFromServer").innerHTML = joke.value.joke;
  }
});

function arrayToString(myAray) {}
