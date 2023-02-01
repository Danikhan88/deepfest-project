// Navbar scroll color change
function changeBg() {
  var navbar = document.getElementById('navbar');
  var scrollValue = window.scrollY; 
  if (scrollValue < 250) {
    navbar.classList.remove('bgColor');
    document.getElementById("nav_img").style.display = "block";
    document.getElementById("nav_img2").style.display = "none"; 
  } else {
    navbar.classList.add('bgColor');
    document.getElementById("nav_img").style.display = "none";
    document.getElementById("nav_img2").style.display = "block"; 
  }
}
window.addEventListener('scroll', changeBg);

// For hamburger menu
const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
});
$(".carousal").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  arrows:true,
  dots:true,
  mouseDrag:true,
  touchDrag:true,
  nav:true,
  navText: [
    '<img src="images/Arrow 6.png" alt="img">',
    ' <img src="images/Arrow 5.png" alt="img">'
],
  responsive: {
    0: {
      items: 1,
      // nav:true
    },
    600: {
      items: 2,
      // nav:true
    },
    1000: {
      items: 3,
      // nav:true
    },
    1500: {
      items: 4,
      // nav:true
    }
  }

});

$(".car-1").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  arrows:true,
  dots:true,
  mouseDrag:true,
  touchDrag:true,
  navText: [
    '<img src="images/Arrow 6.png" alt="img">',
    ' <img src="images/Arrow 5.png" alt="img">'
],
  responsive: {
    2500: {
      items: 4,
      nav:true
    },
    1500: {
      items: 3,
      nav:true
    },
    1000: {
      items: 3,
      nav:true
    },
    300: {
      items: 2,
      nav:true
    },
    0: {
      items: 2,
      nav:true
    }
  }

});

$(".edu-carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  arrows:true,
  dots:true,
  mouseDrag:true,
  touchDrag:true,
  nav:false,
//   navText: [
//     '<img src="images/Arrow 6.png" alt="img">',
//     ' <img src="images/Arrow 5.png" alt="img">'
// ],
  responsive: {
    2500: {
      items: 1,
    },
    1500: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    300: {
      items: 1,
    },
    0: {
      items: 1,
    }
  }

});