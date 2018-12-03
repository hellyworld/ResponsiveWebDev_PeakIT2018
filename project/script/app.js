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
      fetch('http://api.icndb.com/jokes/random/?exclude=[explicit]')
      .then(function(response) {
         return response.json();
      })
      .then(function(myJson) {
         console.log(JSON.stringify(myJson));
      });
   }

});

