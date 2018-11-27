document.addEventListener("DOMContentLoaded", function() {
    console.log('dom loaded');
    loadHeader();
    document.addEventListener('headerLoaded', function (e) {
        console.log('header loaded');
     }, false);

});
