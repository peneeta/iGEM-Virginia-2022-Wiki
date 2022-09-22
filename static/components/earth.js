  const markerSvg = `<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M500.3025 481.34L71.9425 603.1c-30.34 8.62-33.9 50.2-5.46 63.84l136.94 65.78-178.34 178.34c-12.14 12.12-12.14 31.8 0 43.92l43.92 43.92c12.14 12.12 31.8 12.12 43.92 0l178.34-178.34 65.78 136.94c13.66 28.44 55.22 24.88 63.84-5.46l121.74-428.36c7.36-25.82-16.5-49.66-42.32-42.34z m81.82 137.52l-41.58 146.26C668.3025 750.74 767.9825 643.6 767.9825 512c0-141.38-114.62-256-256-256-131.6 0-238.76 99.68-253.12 227.44l146.26-41.56C428.0225 407.08 467.3025 384 511.9825 384c70.58 0 128 57.42 128 128 0 44.68-23.08 83.96-57.86 106.86zM511.9825 16C238.0425 16 15.9825 238.06 15.9825 512c0 16.78 0.88 33.34 2.52 49.7 10.44-8.78 22.1-16.22 35.96-20.16l89.74-25.5c-0.02-1.36-0.2-2.66-0.2-4.02 0-203.38 164.58-368 368-368 203.38 0 368 164.58 368 368 0 203.38-164.58 368-368 368-1.36 0-2.68-0.18-4.02-0.2l-25.5 89.74c-3.94 13.88-11.38 25.54-20.12 35.96 16.34 1.62 32.9 2.5 49.66 2.5 273.94 0 496-222.06 496-496S785.9225 16 511.9825 16z"/></svg>`;

    const N = 6;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() -0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: 7 + Math.random() * 30,
      color: ['white'][Math.round(Math.random() * 3)]
    }));

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
      
      .htmlElement(d => {

        const mark = document.createElement('div');
        mark.innerHTML = markerSvg;
        mark.style.color = `white`
        mark.style.width = `50px`;
        mark.style['pointerEvents'] = 'auto';
        mark.style.cursor = 'pointer';
        mark.onclick = () => console.log('clicked marker');

        return mark;

      })

  window.addEventListener("scroll", function() {
    var div = document.getElementById("earth-section");
    if (div.scrollHeight > div.clientHeight) {
        myGlobe.pauseAnimation();
    }

    if(div.scrollHeight <= div.clientHeight){
      myGlobe.resumeAnimation();
    }
  });


