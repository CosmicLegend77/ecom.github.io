const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay:{
        delay:2500,
    },
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});

var sidebarBtn = document.querySelector("#sidebar_btn")
var sidebarClose = document.querySelector("#sidebar_close")
var sidebar = document.querySelector("#sidebar")
var overlay = document.querySelector("#overlay")

sidebarBtn.addEventListener("click",function(){
  sidebar.classList.add("active");
  overlay.classList.add("active")
})

sidebarClose.addEventListener("click",function(){
  sidebar.classList.remove("active");
  overlay.classList.remove("active")
})

// accordian variables
var accordianBtn = document.querySelectorAll("#accordian_menu")
var accordian = document.querySelectorAll("#mobile_category_menu")

for (let i = 0; i < accordianBtn.length; i++) {

  accordianBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordian.length; i++) {

      if (clickedBtn) break;

      if (accordian[i].classList.contains('active')) {

        accordian[i].classList.remove('active');
        accordianBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

