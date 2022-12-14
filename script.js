// animation particles.js from "https://vincentgarreau.com/particles.js/"

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
  .timeline({ loop: true })
  .add({
    targets: '.ml3 .letter',
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 2250,
    delay: (el, i) => 150 * (i + 1),
  })
  .add({
    targets: '.ml3',
    opacity: 0,
    duration: 500,
    easing: 'easeOutExpo',
    delay: 500,
  });

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particlesjs-config.json', function () {
  console.log('callback - particles.js config loaded');
});

// animation from "https://cssanimation.rocks/scroll-animations/"

// Detect request animation frame
var scroll =
  window.requestAnimationFrame ||
  // IE Fallback
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {
  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
