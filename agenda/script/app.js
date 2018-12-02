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

     listenForChecked();

});

function listenForChecked(){
   var allCheckboxes = document.querySelectorAll('ul>li>input[type="checkbox"]');
   allCheckboxes.forEach(element => {
      element.addEventListener('change', calcualteProgress)
   });
}

function calcualteProgress(){
   var cathegories =  document.querySelectorAll('.cathegory');
   var totalProggress = document.querySelector('#totalProgress');
   totalProggress.value = 0;
   cathegories.forEach(cathegory => {
      var cathegoryProgressBar = cathegory.querySelector('progress');
      var checkedInputs = cathegory.querySelectorAll('input[type="checkbox"]:checked');
      cathegoryProgressBar.value=0;
      checkedInputs.forEach(checkedInput =>{
         debugger;
         cathegoryProgressBar.value = parseInt(cathegoryProgressBar.value) +  parseInt(checkedInput.value);
      });
      totalProggress.value = parseInt(totalProggress.value) +  parseInt(cathegoryProgressBar.value);
   });
}