
    const globeDOM = document.querySelector("[data-js-globe]");

    const myGlobe = Globe({});
    myGlobe(globeDOM);
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 1;
    myGlobe.controls().enableZoom = false;

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
    var div = document.getElementById("earth-section");
    if (div.scrollHeight > div.clientHeight) {
        myGlobe.pauseAnimation();
    }

    if(div.scrollHeight <= div.clientHeight){
      myGlobe.resumeAnimation();
    }
  });


