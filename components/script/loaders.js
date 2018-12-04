function loadHeader() {
  fetch("../components/header.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      document.querySelector("#navigationContainer").innerHTML = markup;
      var event = new Event("headerLoaded");
      document.dispatchEvent(event);

      document
        .querySelector("#expandNav")
        .addEventListener("click", function() {
          if (document.querySelector("#navList").classList.contains("hidden")) {
            document.querySelector("#navList").classList.remove("hidden");
          } else {
            document.querySelector("#navList").classList.add("hidden");
          }
        });

        if(window.location.href.indexOf('project') !=-1 ){
          document.querySelector("#projectLink").classList.add('active');
        }

        if(window.location.href.indexOf('agenda') !=-1 ){
          document.querySelector("#agendaLink").classList.add('active');
        }

    });



}

function loadFooter() {
  fetch("../components/footer.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      document.querySelector("#footerContainer").innerHTML = markup;
      var event = new Event("footerLoaded");
      document.dispatchEvent(event);

    });
}