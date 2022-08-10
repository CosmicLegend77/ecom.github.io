const swiper = new Swiper('.bannerSwiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 2500,
  },
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// sidebar
var sidebarBtn = document.querySelector("#sidebar_btn")
var sidebarClose = document.querySelector("#sidebar_close")
var sidebar = document.querySelector("#sidebar")
// 2nd sidebar
var sidebar2Btn = document.querySelector("#sidebar2_btn")
var sidebar2Close = document.querySelector("#sidebar2_close")
var sidebar2 = document.querySelector("#sidebar2")
var overlay = document.querySelector("#overlay")

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.add("active");
  overlay.classList.add("active")
})

sidebarClose.addEventListener("click", function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active")
})

sidebar2Btn.addEventListener("click", function () {
  sidebar2.classList.add("active");
  overlay.classList.add("active")
})

sidebar2Close.addEventListener("click", function () {
  sidebar2.classList.remove("active");
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

// product variables
let picture = document.querySelector(".main_product .image img")
let active = document.querySelectorAll(".gallery .images")
let mainContainer = document.querySelector("#picture")
let scan = document.querySelector(".scan")
let zoom = document.querySelector("#zoom")

function selectImage(img, n) {
  picture.src = img
  for (let i = 0; i < active.length; i++) {
    if ((n - 1) == i) {
      active[i].classList.add("active")
    } else {
      active[i].classList.remove("active")
    }
  }
  zoom.style.backgroundImage = "url('" + img + "')";
}



let w1 = mainContainer.offsetWidth;
let h1 = mainContainer.offsetHeight;
let ratio = 2.5

zoom.style.backgroundSize = w1 * ratio + 'px ' + h1 * ratio + 'px'

let w2 = scan.offsetWidth
let h2 = scan.offsetHeight

zoom.style.width = w2 * ratio + 'px'
zoom.style.height = h2 * ratio + 'px'

w2 = w2 / 2
h2 = h2 / 2

let x, y, xx, yy;

function move(event) {
  x = event.offsetX;
  y = event.offsetY;

  let xx = x - w2
  let yy = y - h2

  if (x < w2) {
    x = w2
    xx = 0
  }

  if (x > w1 - w2) {
    x = w1 - w2
    xx = x - w2
  }

  if (y < h2) {
    y = h2
    yy = 0
  }

  if (y > h1 - h2) {
    y = h1 - h2
    yy = y - h2
  }
  scan.style.left = x + 'px'
  scan.style.top = y + 'px'

  xx = xx * ratio
  yy = yy * ratio


  zoom.style.backgroundPosition = '-' + xx + 'px ' + '-' + yy + 'px'
}

mainContainer.addEventListener("mousemove", function () {
  scan.classList.add("active")
  zoom.classList.add("active")
})

mainContainer.addEventListener("mouseout", function () {
  scan.classList.remove("active")
  zoom.classList.remove("active")
})