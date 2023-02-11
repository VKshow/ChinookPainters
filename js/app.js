$(document).ready(function() {
    
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $(this).find("textarea").val("");
            
          $('form').trigger('reset');
        });
        return false;
    });
});

let scrollpos = window.scrollY;
console.log(scrollpos);

const header = document.querySelector(".header");
const scrollChange = 700;
const main = document.querySelector("body");

const add_class_on_scroll = () => header.classList.add("fixed");
const remove_class_on_scroll = () => header.classList.remove("fixed");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { 
    add_class_on_scroll();
    main.classList.add("bodyMargin");
  } else { 
    remove_class_on_scroll();
    main.classList.remove("bodyMargin"); 
  }
  
  
});