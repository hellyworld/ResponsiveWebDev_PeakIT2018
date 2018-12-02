function loadHeader() {
  fetch("../../_components/header.html")
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
    });
}

function loadFooter() {
  fetch("../../_components/footer.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      document.querySelector("#footerContainer").innerHTML = markup;
      var event = new Event("footerLoaded");
      document.dispatchEvent(event);

    });
}