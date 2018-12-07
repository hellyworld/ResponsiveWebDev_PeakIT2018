var agendaStorageModel = [];
var rawStorage = window.localStorage.getItem('agendaStorage');
if(rawStorage){
   agendaStorageModel =  JSON.parse(window.localStorage.getItem('agendaStorage'));
}

/**
 * Entry Point of the page
 */
document.addEventListener("DOMContentLoaded", function() {
    console.log('dom loaded');
    loadHeader();
    loadFooter();
    insertFavicon();
    reactToLoaders();
    initCheckboxes(); 
});

/**
 * Updates the checkboxes and progress-bars
 * adds change event listener
 */
function initCheckboxes(){

   var allCheckboxes = document.querySelectorAll('ul>li>input[type="checkbox"]');

   allCheckboxes.forEach(element => {
      updateCheckboxStateFromLocalStorage(element);
      element.addEventListener('change', calcualteProgress);
   });

   //initial calculations
   calcualteProgress();
}


function updateCheckboxStateFromLocalStorage(checkboxEl){
   for(var i =0; i<agendaStorageModel.length; i++){
      if(checkboxEl.id == agendaStorageModel[i].inputId){
         checkboxEl.checked = agendaStorageModel[i].checked;
      }
   }
}

function calcualteProgress(){
   
   var changedInputEl = this;
   updateValueInLocalStorage(changedInputEl);

   var allCathegories =  document.querySelectorAll('.cathegory');
   var totalProggress = document.querySelector('#totalProgress');

   totalProggress.value = 0;
   allCathegories.forEach(cathegory => {
      var cathegoryProgressBar = cathegory.querySelector('progress');
      var checkedInputs = cathegory.querySelectorAll('input[type="checkbox"]:checked');
      cathegoryProgressBar.value=0;
      checkedInputs.forEach(checkedInput =>{
         cathegoryProgressBar.value = parseInt(cathegoryProgressBar.value) +  parseInt(checkedInput.value);
      });
      totalProggress.value = parseInt(totalProggress.value) +  parseInt(cathegoryProgressBar.value);
   });

}

function updateValueInLocalStorage(inputEl){
   if (agendaStorageModel && agendaStorageModel.length){
      var updated = false;
      for(var i=0; i<agendaStorageModel.length; i++){
         if(inputEl.id == agendaStorageModel[i].inputId){
            agendaStorageModel[i].checked =  inputEl.checked;
            updated = true;
         }
      }
      if(!updated){
         agendaStorageModel.push({inputId:inputEl.id, checked:inputEl.checked});
      }
      window.localStorage.setItem('agendaStorage', JSON.stringify(agendaStorageModel));
   }
   else{
      agendaStorage.push({inputId:inputEl.id, checked:inputEl.checked});
      window.localStorage.setItem('agendaStorage', JSON.stringify(agendaStorageModel));
   }
}

function reactToLoaders(){
   document.addEventListener('headerLoaded', function (e) {
      console.log('header loaded');
   }, false);
   document.addEventListener('footerLoaded', function (e) {
      console.log('footer loaded');
   }, false);
}