document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM loaded');
    loadHeader();
    loadFooter();

    document.addEventListener('headerLoaded', function (e) {
        console.log('header loaded');
     }, false);
     document.addEventListener('footerLoaded', function (e) {
        console.log('footer loaded');
     }, false);

     //models
     var getJokeButton = document.querySelector("#getJoke");

    //event listeners
    getJokeButton.addEventListener("click", getJokeFromServer);

    //todo: replace with AXIOS??
    function getJokeFromServer(){

      var firstNameVal = document.querySelector('#firstName').value;
      var lastNameVal = document.querySelector('#lastName').value;

      var url = new URL('http://api.icndb.com/jokes/random/');

      console.dir(url);

      var exludedCathegories = ["explicit"] ;

      var params = {exclude: '"["explicit"]"' , firstName : firstNameVal, lastName: lastNameVal}

      url.search = new URLSearchParams(params)

      fetch(url)
      .then(function(response) {
         console.log('initial response: ', response);
         return response.json();
      })
      .then(function(jsonResponse) {
         console.log('json response: ', jsonResponse);
         displayJoke(jsonResponse);
      });
   }

   function displayJoke (joke){
      //console.log('doc container',  document.querySelector('#jokeContainer p'));
      document.querySelector('#jokeContainer p').innerHTML = joke.value.joke;
   }

});

function arrayToString(myAray){

}
