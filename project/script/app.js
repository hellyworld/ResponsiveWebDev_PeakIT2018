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

    function getJokeFromServer(){
   
   }

});

