const mainMenu = document.querySelector('.main-menu');
const contentContainer = document.querySelector('#content-container');

mainMenu.addEventListener('click', function(event) {
  event.preventDefault(); 
  const target = event.target;
  const link = target.closest('a');
    loadLayout(link.id);

});

function loadLayout(layoutId) {
  const layoutUrl = `layouts/${layoutId}.html`; 
  const xhr = new XMLHttpRequest(); 
  xhr.open('GET', layoutUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      contentContainer.innerHTML = xhr.responseText; 
    }
  };
  xhr.send(); 
}
