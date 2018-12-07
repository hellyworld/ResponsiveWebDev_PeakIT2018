function loadHeader() {
  fetch("../components/header.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      //reander the header
      document.querySelector("#headerContainer").innerHTML = markup;

      var event = new Event("headerLoaded");
      document.dispatchEvent(event);

      addHeaderEvents();
      activateLinkForCurrentPage();
      
    });
}

function loadFooter() {
  fetch("../components/footer.html")
    .then(function(response) {
      return response.text();
    })
    .then(function(markup) {
      //render the markup
      document.querySelector("#footerContainer").innerHTML = markup;

      var event = new Event("footerLoaded");
      document.dispatchEvent(event);

    });
}

function insertFavicon (){
  fetch("../components/favicon.html")
  .then(function(response) {
    return response.text();
  })
  .then(function(markup) {
    document.getElementsByTagName('head')[0].insertAdjacentHTML('afterbegin', markup);
    var event = new Event("faviconLoaded");
    document.dispatchEvent(event);

  });
}


function addHeaderEvents(){
  document
        .querySelector("#expandNav")
        .addEventListener("click", function() {
          if (document.querySelector("#navList").classList.contains("hidden")) {
            document.querySelector("#navList").classList.remove("hidden");
            document.querySelector("#expandNav").innerHTML = "Collapse";
          } else {
            document.querySelector("#navList").classList.add("hidden");
            document.querySelector("#expandNav").innerHTML = "Expand";
          }
        });
}

function activateLinkForCurrentPage(){
  if (window.location.href.indexOf("project") != -1) {
    document.querySelector("#projectLink").classList.add("active");
  }

  if (window.location.href.indexOf("helloWorld") != -1 || window.location.href.indexOf("helloworld") != -1) {
    document.querySelector("#helloWorldLink").classList.add("active");
  }

  if (window.location.href.indexOf("agenda") != -1) {
    document.querySelector("#agendaLink").classList.add("active");
  }

}