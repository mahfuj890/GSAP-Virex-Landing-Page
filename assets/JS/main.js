$(document).ready(function () {
  //  sticky navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.navbar_wrapper ').addClass("navbar-fixed");
    } else {
      $('.navbar_wrapper ').removeClass("navbar-fixed");
    }

  });
  $(".bar_line").click(function () {
    $(this).hide();
    $(".times_icon").show();
    $(".right_shapes").hide();

  });
  $(".times_icon").click(function () {
    $(this).hide();
    $(".bar_line").show();
    $(".right_shapes").show();


  });

  // Multi Level Nested Dropdown and Navbar
  $("#navbar").bootnavbar();
  $("#home_current").mouseenter(function () {


  });



  // Waypoint For Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1200
  });





});
// For Video Pause after closing
var myVideo = document.getElementById("video_btn_close");

function playPause() {
  if (myVideo.play)
    myVideo.pause();


}
// Slider Swiper JS

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

});

//Tesimonial Swiper JS
var swiper = new Swiper('.swiper-container2', {

  navigation: {
    nextEl: '.fa-arrow-right',
    prevEl: '.fa-arrow-left',
  },
});

// AOS On Page Scroll JS
// $(function() {
//   AOS.init({
//     duration: 1100,
//     offest: 50,
//   });
// });

