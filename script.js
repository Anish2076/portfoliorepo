// linguist-language=JavaScript
// Portfolio Interactions
console.log("Portfolio initialized");
document.addEventListener('DOMContentLoaded', () => {
  // Add interactivity later
  const yearEl = document.querySelector('#current-year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
