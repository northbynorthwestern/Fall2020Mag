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

  var waypoint3 = new Waypoint({
    element: document.getElementById('trigger3'),
    handler: function() {
      document.getElementById("first-4").classList.add("animated-first")
      document.getElementById("last-4").classList.add("animated-last")
    },
    offset: 500
  })