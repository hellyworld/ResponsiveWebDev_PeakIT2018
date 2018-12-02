var agendaStorage = [];
var rawStorage = window.localStorage.getItem('agendaStorage');
if(rawStorage){
    agendaStorage =  JSON.parse(window.localStorage.getItem('agendaStorage'));
}

var agendaDataStructure = [
];

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

     initCheckboxes(); 
});

function initCheckboxes(){
   var allCheckboxes = document.querySelectorAll('ul>li>input[type="checkbox"]');
   allCheckboxes.forEach(element => {
      getCheckboxFromLocalStorage(element);
      calcualteProgress();
      element.addEventListener('change', calcualteProgress);
   });
}

function getCheckboxFromLocalStorage(checkboxEl){
   for(var i =0; i<agendaStorage.length; i++){
      if(checkboxEl.id == agendaStorage[i].inputId){
         debugger;
         checkboxEl.checked = agendaStorage[i].checked;
      }
   }
}

function calcualteProgress(){
   var changedInputEl = this;
   console.log(changedInputEl);
   updateValueInLocalStorage(changedInputEl);
   var cathegories =  document.querySelectorAll('.cathegory');
   var totalProggress = document.querySelector('#totalProgress');
   totalProggress.value = 0;
   cathegories.forEach(cathegory => {
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
   debugger;
   if (agendaStorage && agendaStorage.length){
      var updated = false;
      for(var i=0; i<agendaStorage.length; i++){
         if(inputEl.id == agendaStorage[i].inputId){
            debugger;
            agendaStorage[i].checked =  inputEl.checked;
            updated = true;
         }
      }
      if(!updated){
         agendaStorage.push({inputId:inputEl.id, checked:inputEl.checked});
      }
      window.localStorage.setItem('agendaStorage', JSON.stringify(agendaStorage));
   }
   else{
      debugger;
      agendaStorage.push({inputId:inputEl.id, checked:inputEl.checked});
      debugger;
      window.localStorage.setItem('agendaStorage', JSON.stringify(agendaStorage));
   }

}
