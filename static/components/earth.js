var planet = planetaryjs.planet();

    // You can remove this statement if `world-110m.json`
    // is in the same path as the HTML page:
    planet.loadPlugin(planetaryjs.plugins.earth({
      topojson: { file: 'world-110m.json' },
      /* Let's add some color to the globe */
      oceans:   { fill:   '#0D47A1' },
      land:     { fill:   '#4CAF50' },
      borders:  { stroke: '#1B5E20' }
    }));

    // Load our custom autorotate plugin
    planet.loadPlugin(autorotate(5));

    // Load the `pings` plugin to draw animated pings on the globe
    planet.loadPlugin(planetaryjs.plugins.pings({
      color: '#ffffff', ttl: 1000, angle: 10
    }));

    // Make the planet fit well in its canvas
    planet.projection.scale(250).translate([250, 250]);
    var canvas = document.getElementById('globe');
    planet.draw(canvas);

    // Get location when clicking the button
    var locationButton = window.document.getElementById('see-my-location-button');
    locationButton.addEventListener('click', function() {
      // Disable button while we get the location
      locationButton.setAttribute('disabled', 'true');
      // Change button label
      locationButton.innerText = 'Getting location...';
      navigator.geolocation.getCurrentPosition(function(position) {
        // Success callback
        showLocation(position);
        locationButton.innerText = 'Done, look at the globe';
      }, geoError);
    });

    // Helper function to add one ping on the globe
    function showLocation(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      // Add a ping on the globe every second
      setInterval(function() {
        planet.plugins.pings.add(longitude, latitude);
      }, 1000);
    }

    // Geolocation API error callback
    function geoError(posError) {
      locationButton.classList.add('error');
      locationButton.innerText = posError.message;
    }

    // This plugin will automatically rotate the globe around its vertical
    // axis a configured number of degrees every second.
    function autorotate(degPerSec) {
      // Planetary.js plugins are functions that take a `planet` instance
      // as an argument...
      return function(planet) {
        var lastTick = null;
        var paused = false;
        planet.plugins.autorotate = {
          pause:  function() { paused = true;  },
          resume: function() { paused = false; }
        };
        // ...and configure hooks into certain pieces of its lifecycle.
        planet.onDraw(function() {
          if (paused || !lastTick) {
            lastTick = new Date();
          } else {
            var now = new Date();
            var delta = now - lastTick;
            // This plugin uses the built-in projection (provided by D3)
            // to rotate the globe each time we draw it.
            var rotation = planet.projection.rotate();
            rotation[0] += degPerSec * delta / 1000;
            if (rotation[0] >= 180) rotation[0] -= 360;
            planet.projection.rotate(rotation);
            lastTick = now;
          }
        });
      };
    };