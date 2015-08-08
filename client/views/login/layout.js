Template.loginLayout.rendered = function() {
  $('html').addClass("scroll").removeClass("noscroll");
  window.pJSDom = [];
  // return particlesJS.load('particles-js', '/scripts/particles.json', function() {});
  $.getScript("/scripts/constellation.js");
  console.log('constellation');  
};