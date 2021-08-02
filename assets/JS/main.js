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

let heroButton = document.querySelector(".hero_button1");
let heroImageArea = document.querySelector(".hero_img_area");
let heroImage1 = document.querySelector(".hero_img1");
let heroImage2 = document.querySelector(".hero_img2");
let heroImage3 = document.querySelector(".hero_img3");

heroButton.addEventListener("click",(e)=>{
  heroImageArea.classList.toggle("changeImageActive");
  
})



gsap.registerPlugin(ScrollTrigger);



// Hero Section
gsap.timeline({
  scrollTrigger:{
    trigger:".hero_wrapper",
    toggleActions:"restart reverse none none",
    scrub:true,

  }
})
.from(".hero_img1",{duration:5,x:innerWidth+1 , ease:
"power2",delay:0.5   })
.to(".hero_img1",{duration:5,x:innerWidth+1,ease:
  "linear" , delay:0.5    });


gsap.timeline({
  scrollTrigger:{
    trigger:".hero_wrapper",
    toggleActions:"restart reverse none none",
    scrub:true,
    transformOrigin: "left top"

  }
})
.from(".hero_img2",{duration:4,x:innerWidth+1 , ease:
"power2",   })
.to(".hero_img2",{duration:4,x:innerWidth+1,ease:
  "linear" ,     });

gsap.timeline({
  scrollTrigger:{
    trigger:".hero_wrapper",
    toggleActions:"restart reverse none none",
    scrub:true,
    transformOrigin: "left top"

  }
})
.from(".hero_img3",{duration:4,x:innerWidth+1 , ease:
"power2",   })
.to(".hero_img3",{duration:4,x:innerWidth+1,ease:
  "linear" ,     });

  // Home Step Section
  gsap.timeline({
    scrollTrigger:{
      trigger:".home_step_row1   ",
      toggleActions:"restart reverse none none",
      scrub:true,

    }
  })
  .from(".tilte",{duration:2,x:20,opacity:0   })
  .from(".step_img",{duration:2,x:innerWidth * -1   });

  gsap.timeline({
    scrollTrigger:{
      trigger:".home_step_row1",
      toggleActions:"restart reverse none none",
      scrub:true,

    }
  })
  .from(".title_paragraph",{duration:2,y:50,opacity:0   });

  gsap.timeline({
    scrollTrigger:{
      trigger:".screen_wrapper",
      toggleActions:"restart reverse none none",
      scrub:true,

      start:"top 100%",

      // end:"+=100%",

    }
  })
  .from(".step_list1",{duration:2,y:50,opacity:0  })
  .from(".step_list2",{duration:2,y:50,opacity:0  })
  .from(".step_list3",{duration:2,y:50,opacity:0  })
  // .to(".stet_list1",{duration:2,x:innerWidth+1,opacity:1  })



  // Features Section

  gsap.timeline({
    scrollTrigger:{
      trigger:".feature_row  ",
      toggleActions:"restart reverse none none",
      scrub:true,

    }
  })
  .from(".features_title",{duration:2,x:20,opacity:0   })

  gsap.timeline({
    scrollTrigger:{
      trigger:".feature_row",
      toggleActions:"restart reverse none none",
      scrub:true,

    }
  })
  .from(".features_paragraph",{duration:2,y:50,opacity:0   });


  gsap.timeline({
    scrollTrigger:{
      trigger:".fitems_row",
      toggleActions:"restart reverse none none",
      scrub:true,
      pin:true,

    }
  })
  // .from(".fitems1",{duration:2,y:50,opacity:0  })
  // .from(".fitems2",{duration:2,y:50,opacity:0  })
  // .from(".fitems3",{duration:2,y:50,opacity:0  })
  // .from(".fitems4",{duration:2,y:50,opacity:0  })
  // .from(".fitems5",{duration:2,y:50,opacity:0  })
  .from(".features_iteam_area",{duration:1,y:50,opacity:0,stagger:0.8, ease:"linear"    });

  // Video Features Section
  // gsap.timeline({
  //   scrollTrigger:{
  //     trigger:".video_features_wrapper",
  //     toggleActions:"restart reverse none none",
  //     scrub:true,
  //     // start:"top 80%",
  //     // pin:true,
  //     markers:true,

  //   }
  // })
  // .from(".video_features_wrapper",{duration:2,x:"center",width:500,height:500 ,stagger:0.8, ease:"linear"    });

  // Expertise Section

  gsap.timeline({
    scrollTrigger:{
      trigger:".expertise_wrapper",
      toggleActions:"restart reverse none none",
      scrub:true,
      pin:true,

    }
  })

  .from(".expertise_service_iteam",{duration:2,y:70,opacity:0,stagger:0.8, ease:"linear"    });

  // Perfect Solution


  gsap.timeline({
    scrollTrigger:{
      trigger:".solution_section",
      toggleActions:"restart reverse none none",
      scrub:true,
      pin:true,

    }
  })

  .from(".solution_service_iteam",{duration:2,x:50,opacity:0,stagger:0.8, ease:"linear"    })
  .from(".soluation_title",{
    duration:2,scale:0 , stagger:0.8
  });





