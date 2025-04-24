function accordion_toggle(id) {
    var sections = document.getElementsByClassName("accordion-section");
  
    for (let i = 0; i < sections.length; i++) {
      var section = sections[i];
      if (section.id === id) {
        if (section.style.display === "block") {
          section.style.display = "none";
        } else {
          section.style.display = "block";
        }
      } else {
        section.style.display = "none";
      }
    }
    }