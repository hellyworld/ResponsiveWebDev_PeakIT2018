document.addEventListener("DOMContentLoaded", function() {
    console.log('dom loaded');
    loadHeader();
    loadFooter();
    document.addEventListener('headerLoaded', function (e) {
        console.log('header loaded');
     }, false);
     document.addEventListener('footerLoaded', function (e) {
        console.log('footer loaded');
     }, false);

});
