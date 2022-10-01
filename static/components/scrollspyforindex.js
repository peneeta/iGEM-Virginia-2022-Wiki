function selectTop(item){
  const thisID = item.id;
    const choices = document.querySelectorAll('.top-select.active')
    for(i=0; i<choices.length; i++){
        choices[i].classList.remove('active');
    }

    item.classList.add('active');


    if(thisID == "toc"){
      if(document.getElementById("index").classList.contains("hidden")){
        document.getElementById("index").classList.remove("hidden");
      }
      document.getElementById("references").classList.add("hidden");
    }

    if(thisID == "refs"){
      if(document.getElementById("references").classList.contains("hidden")){
        document.getElementById("references").classList.remove("hidden")
      }
      document.getElementById("index").classList.add("hidden");
    }
}

function scrollToSection(item){
    const target = item.getAttribute('scrollTo');
    var selectedHeader = document.getElementById(target);

    var headerOffset = 130;
    var elementPosition = selectedHeader.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "auto"

    });

    const elems = document.querySelectorAll(".index-item");
    if(elems !== null){
      for(let i=0; i<elems.length; i++){
        elems[i].classList.remove('active')
      }
    }
    item.classList.add('active');
  }



// Scrollspy
var section = document.querySelectorAll(".body-section");
let indexLinks = document.querySelectorAll(".index-item");

window.onscroll = () =>{
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height - 130){
            indexLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('div [scrollTo*=' + id + ']').classList.add('active');
            })
        }
    })
};


