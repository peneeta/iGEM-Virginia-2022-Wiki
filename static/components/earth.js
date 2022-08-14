  const markerSvg = `<svg width="36px" height="36px" viewBox="-4 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Uploaded to SVGRepo https://www.svgrepo.com -->
  <title>map-marker</title>
  <desc>Created with Sketch.</desc>
  <defs></defs>
  <g id="Vivid.JS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)">
          <g id="Icons" transform="translate(37.000000, 169.000000)">
              <g id="map-marker" transform="translate(78.000000, 468.000000)">
                  <g transform="translate(10.000000, 6.000000)">
                      <path d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z" id="Shape" fill="#FF6E6E"></path>
                      <circle id="Oval" fill="#0C0058" fill-rule="nonzero" cx="14" cy="14" r="7"></circle>
                  </g>
              </g>
          </g>
      </g>
  </g>
  </svg>`;
    
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
        mark.style.width = `50px`;
        mark.style['pointerEvents'] = 'auto';
        mark.style.cursor = 'pointer';

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


