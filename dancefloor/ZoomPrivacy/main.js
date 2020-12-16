var tl = new TimelineMax({ repeat: -1 })
  .to(".securitycam", 2, { rotation: 5 })
  .to(".securitycam", 3, { rotation: -5 })
  .to(".securitycam", 2, { rotation: 0 });
