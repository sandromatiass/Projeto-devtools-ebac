document.addEventListener("DOMContentLoaded", function() {
  const limitTextElements = document.querySelectorAll('.limit-text');
  const maxLength = 80;

  limitTextElements.forEach(function(element) {
    let text = element.textContent;
    if (text.length > maxLength) {
      element.textContent = text.slice(0, maxLength) + '...';
    }
  });
});