// Runs after the page loads
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.theme-btn');

  // Mark whichever button matches the currently active theme
  function markActiveButton(theme) {
    buttons.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
  }

  // Highlight the correct button on page load
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  markActiveButton(currentTheme);

  // When a swatch is clicked: apply the theme + remember it + update highlight
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const theme = btn.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('site-theme', theme);
      markActiveButton(theme);
    });
  });
});
