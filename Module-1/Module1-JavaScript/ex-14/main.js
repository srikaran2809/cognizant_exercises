$(document).ready(function () {
  $('#registerBtn').click(function () {
    console.log('🎯 Register button clicked');

    // Toggle visibility of events
    $('.event-card').fadeIn(1000); // fade in all event cards

    // Auto-hide after 5 seconds
    setTimeout(() => {
      $('.event-card').fadeOut(1000);
    }, 5000);
  });
});
