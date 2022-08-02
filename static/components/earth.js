
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

      .pointAltitude('size')
      .pointColor('color')
      .showAtmosphere(true)



