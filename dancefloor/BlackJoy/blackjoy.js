// $(document).ready(function(){
 
//     // hide our element on page load
//     $('.names').css('opacity', 0);
   
//     $('.names').waypoint(function() {
//         $('.names').addClass('fadeInLeft');
//     }, { offset: '50%' });
   
//   });

// $(document).ready(function() {
//     $('.first_name').waypoint(function() {
//     $('.first_name').css({
//     animation: "slidein1",
//     opacity: "1"
//     });
//     }, { offset: '75%' });
// });

var waypoint1 = new Waypoint({
    element: document.getElementById('trigger1'),
    handler: function() {
      document.getElementById("first-2").classList.add("animated-first")
      document.getElementById("last-2").classList.add("animated-last")
    },
    offset: 500
  })
  var waypoint2 = new Waypoint({
    element: document.getElementById('trigger2'),
    handler: function() {
      document.getElementById("first-3").classList.add("animated-first")
      document.getElementById("last-3").classList.add("animated-last")
    },
    offset: 500
  })