
let width = window.innerWidth,

// The new options for carousel
perspective = 4800,       // controls how much distortion the angle has
z = 00;                   // controls the size of the carousel on page
shift = 0,                // range -0.5 ~ 0.5, applies an angle shift from center;

(function($) {
  $(function() {
    $('#sample1').carousel3d({
      perspective,
      shift,
      width,
      z
    });
  });
}(jQuery));

// refresh carousel when the window resizes to make it responsive;
window.addEventListener('resize', (e) => {

  let width = window.innerWidth;

  $('#sample1').carousel3d('refresh', {

    // same setting as initiation above
    perspective,
    shift,
    width,
    z
  });
})