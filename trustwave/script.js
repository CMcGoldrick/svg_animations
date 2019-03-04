var lineDrawing = anime({
    targets: '#lineDrawing .drawpath',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 4000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

// var fillTriangle = anime({
//     targets: '.red-triangle',
//     opacity: [0, 1],
//     fill: '#ED1A3D',
//     easing: 'easeOutExpo',
//     // duration: 15000,
//     delay: 5000,
//     offset: 0,
//     loop: true
//   }
// );

