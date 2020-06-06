if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
}

// Listen for install event, set callback
self.addEventListener('install', function(event) {
    // Perform some task
});

self.addEventListener('activate', function(event) {
  // Perform some task
});

$(document).ready(function() {
  $("[data-link]").click(function() {
    window.location.href = $(this).attr("data-link");
    return false;
  });
});