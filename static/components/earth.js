
    const globeDOM = document.querySelector("[data-js-globe]");

    const myGlobe = Globe({});
    myGlobe(globeDOM);
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 1;
    myGlobe.controls().enableZoom = false;
    myGlobe.animateIn = false;

    window.addEventListener('resize', (event) => {
      myGlobe.width([event.target.innerWidth])
      myGlobe.height([event.target.innerHeight])
    });

    myGlobe
      .globeImageUrl('https://static.igem.wiki/teams/4477/wiki/images/earth-night.jpg')
      .bumpImageUrl('https://static.igem.wiki/teams/4477/wiki/images/earth-topology.png')
      .backgroundColor("rgba(0,0,0,0)")
      .pointAltitude('size')
      .pointColor('color')
      .showAtmosphere(true)
      .atmosphereColor("rgba(255, 247, 175, 0.51)")

  window.addEventListener("scroll", function() {
    var elementTarget = document.getElementById("earth-section");
    if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
        myGlobe.pauseAnimation();
    }

    if( this.window.scrollY < (elementTarget.offsetTop + elementTarget.offsetHeight)){
      myGlobe.resumeAnimation();
    }
  });


