// Initialize ScrollReveal
//left to right  

var id0 = ['overlay_1', 
           'overlay_2', 
           'overlay_3', 
           'overlay_4', 
           'overlay_5', 
           'overlay_7', 
           'overlay_10', 
           'overlay_13', 
           'overlay_14', 
           'overlay_15', 
           'overlay_16', 
           'overlay_12'];
ScrollReveal().reveal('.leftToRight', {
  duration: 2000,  // Duration of the animation in milliseconds (6 seconds in this case)
  origin: 'left',    // Animation origin (from the left)
  distance: '100%',  // Distance to move (100% of the element's width)
  scale: 1,          // Starting scale (no scaling)
  opacity: 1,
  reset: false,
  cleanup: true
});
function detailedDescription(id1, id2) {
  console.log(id1);
  document.getElementById(id1).style.display = 'flex';
  document.getElementById(id2).style.setProperty('overflow-y', 'hidden');
  var imgParts = document.getElementsByClassName("img-part");

  // Loop through the collection and set the opacity for each element
  for (var i = 0; i < imgParts.length; i++) {
    imgParts[i].style.opacity = '0.3';
  }
}

function closePopup(id1, id2) {
  document.getElementById(id1).style.display = 'none';
  document.getElementById(id2).style.setProperty('overflow-y', 'auto');
  var imgParts = document.getElementsByClassName("img-part");

  // Loop through the collection and set the opacity for each element
  for (var i = 0; i < imgParts.length; i++) {
    imgParts[i].style.opacity = '1';
  }
}

id0.forEach(function (event) {
  if (event.target === this) {
    closePopup();
  }
});



//NOT WORKING
// ScrollReveal().reveal('.rightToLeft', {
//   duration: 2000,  // Duration of the animation in milliseconds (6 seconds in this case)
//   origin: 'right',    // Animation origin (from the left)
//   distance: '100%',  // Distance to move (100% of the element's width)
//   scale: 1,          // Starting scale (no scaling)
//   opacity: 1, 
//   reset:false, 
//   cleanup: true 
// });



// Zoom in out 
ScrollReveal().reveal('.zoomInOut', {
  duration: 2000,  // Duration of the animation in milliseconds (6 seconds in this case)
  origin: 'top',  // Animation origin (you can use other values like 'bottom', 'left', 'right', etc.)
  scale: 1,       // Starting scale (1 means no scaling)
  distance: '0px', // Distance the element moves during the animation
  opacity: 0,     // Starting opacity (0 means element is initially invisible)
  reset: false,
  cleanup: true,     // Reset the animation when element is not in the viewport
});

