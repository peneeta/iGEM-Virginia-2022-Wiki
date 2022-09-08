function scrollToSection(item){
    const target = item.getAttribute('scrollTo');
    var selectedHeader = document.getElementById(target);

    var headerOffset = 150;
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
