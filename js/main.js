// Registering Service Worker
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/itsaii-surf/sw.js');
};

$(document).ready(function() {
  $("[data-link]").click(function() {
    window.location.href = $(this).attr("data-link");
    return false;
  });
});