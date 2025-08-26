// Utility functions
const $ = (sel, root=document) => root.querySelector(sel);

// Theme toggle with persistence
const root = document.documentElement;
function setTheme(mode){
  if(mode === 'light'){
    root.classList.add('light');
    $('#icon-sun').style.display='none';
    $('#icon-moon').style.display='block';
    $('#theme-label').textContent = 'Light';
  } else {
    root.classList.remove('light');
    $('#icon-sun').style.display='block';
    $('#icon-moon').style.display='none';
    $('#theme-label').textContent = 'Dark';
  }
  localStorage.setItem('theme', mode);
}

function initTheme(){
  let saved = localStorage.getItem('theme');
  if(saved !== 'light' && saved !== 'dark') {
    saved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  setTheme(saved);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  $('#theme-toggle').addEventListener('click', ()=> setTheme(root.classList.contains('light') ? 'dark' : 'light'));
});
