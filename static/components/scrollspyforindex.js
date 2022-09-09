function scrollToSection(item){
    const target = item.getAttribute('scrollTo');
    var selectedHeader = document.getElementById(target);

    var headerOffset = 140;
    var elementPosition = selectedHeader.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "auto"

    });

    const elems = document.querySelectorAll(".index-item.active");
    if(elems !== null){
      for(let i=0; i<elems.length; i++){
        elems[i].classList.remove("active");
      }
    }
    item.classList.add("active");
  }

// Scrollspy
// Get offset positions for each header
// if scroll position is within the div, change class to active class
// also remove active class from other headers


var section = document.querySelectorAll(".body-section");
var sections = {};
var i=0;

Array.prototype.forEach.call(section, function(e){
    sections[e.id] = e.offsetTop;
});


window.onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (i in sections) {
        if (sections[i] <= scrollPosition) {
            document.querySelector('div[scrollTo*='  + i + ']').setAttribute('active', 'true');
        }
      }
};


