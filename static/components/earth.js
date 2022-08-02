    // Gen random data
    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() / 3,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));

    const globeDOM = document.querySelector("[data-js-globe]");

    const myGlobe = Globe({});
    myGlobe(globeDOM);
    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = 1;
    myGlobe.controls().enableZoom = false;

    myGlobe
      .globeImageUrl('https://static.igem.wiki/teams/4477/wiki/images/earth-night.jpg')
      .pointsData(gData)
      .pointAltitude('size')
      .pointColor('color')
      .showAtmosphere(true)



