const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

function first() {
  var video = document.querySelector(".page1 video")
  var logo = document.querySelector(".page1 #logo")
  var nav = document.querySelector("nav")

  var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1",
      // markers: true,
      start: "top 10%",
      end: "top -100%",
      scrub: 2,
      pin: true,
    }
  })

  tl.to(logo, {
    zIndex: 3,
    top: "-2%",
    width: "15vw",
  }, "x")

  tl.from(nav,{
    opacity : 0,
  },"-=0.23")

  tl.to(video, {
    zIndex: 2,
    width: "100%",
    height: "100vh",
  }, "x")

}
first()

function second(){
  var tl = gsap.timeline({
    scrollTrigger : {
      scroller : "body",
      trigger : ".page2",
      start : "top 70%",
      end : "top 40%",
      scrub : 2,
    }
  })

  tl.from(".page2 .left",{
    scale : 0
  },"x")
  tl.from(".page2 .right",{
    scale : 0
  },"x")
}

second()

function third() {
  gsap.from(".page3 .heading h2", {
    x: -100,
    opacity: 0,
    scrollTrigger : {
      trigger: '.page3',
      scroller: 'body',
      start: 'top 70%',
      end: 'top 40%',
      scrub: 2,
    }
  },"y")

  gsap.from(".page3 .heading p", {
    x: 100,
    opacity: 0,
    scrollTrigger : {
      trigger: '.page3',
      scroller: 'body',
      start: 'top 70%',
      end: 'top 40%',
      scrub: 2,
    }
  },"y")

  gsap.from(".page3 .images", {
    opacity: 0,
    scrollTrigger : {
      trigger: '.page3',
      scroller: 'body',
      start: 'top 50%',
      end: 'top 40%',
      scrub: 2,
    }
  })

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
    
});
}

third()

function extra(){
  const items = [
    { name: 'LUXURY ROOMS', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/75c3543b98b2fd7c23b8b921defdc4e26ea1a054-6990x3000.jpg?w=1600&auto=format&dpr=2' },
    { name: 'SPA & WELLNESS', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/dbd5caa61914f2486a98d3c9040e2205beb25c00-8192x5464.jpg?w=1600&auto=format&dpr=2' },
    { name: 'GOURMET DINING', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/85f908ca942713512fb119b32df7f7321305efea-8192x5464.jpg?w=1600&auto=format&dpr=2' },
    { name: 'ROOFTOP POOL', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/870ca9841c48299df9fcee361c438ac0f56359f5-5924x3949.jpg?w=1600&auto=format&dpr=2' },
    { name: 'CONFERENCE ROOMS', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/259d901a7f8a8803bbe3e22814a80be633d3f477-5054x2531.jpg?w=1600&auto=format&dpr=2' },
    { name: 'WEDDING VENUES', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/0eaf104ef98b07894260007fd590fe00fe51d9f6-6447x4766.jpg?w=1600&auto=format&dpr=2' },
    { name: 'BUTLER SERVICE', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/7f36fdfa951cb23d291a5315cc042407a02daaee-6313x4200.jpg?w=1600&auto=format&dpr=2' },
    { name: 'DELUXE ROOM', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/0004d1af31966de4b3f7109c9ea5b63917352a10-7913x5464.jpg?w=1600&auto=format&dpr=2' },
    { name: 'DINING ROOM', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/4a251002cf9fcccdbf87c9e63e1508eff8ed1ff7-6720x4480.jpg?w=1600&auto=format&dpr=2' },
    { name: 'WINE CELLAR', bg: 'https://cdn.sanity.io/images/ocl5w36p/production/a8a480ba757a713b29ad1f98f8636642f8ec5067-6720x4480.jpg?w=1600&auto=format&dpr=2' }
];

const listContainer = document.querySelector('.list');
const hoverSound = document.querySelector('#hover-sound');
const clickSound = document.querySelector('#click-sound');
const backgroundOverlay = document.querySelector('.background-overlay');
const extra = document.querySelector(".extra")

items.forEach(item => {
    const listItem = document.createElement('div');
    listItem.className = 'list-item';
    listItem.textContent = item.name;
    listItem.setAttribute('data-bg', `url('${item.bg}')`);
    listContainer.appendChild(listItem);
});

document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('.list');

    list.addEventListener('mouseover', function(event) {
        if (event.target && event.target.classList.contains('list-item')) {
            extra.style.backgroundImage = event.target.getAttribute('data-bg');
            extra.style.backgroundSize = 'cover';
            extra.style.backgroundPosition = 'bottom';
            hoverSound.play();
            backgroundOverlay.style.opacity = '0.5';
        }
    });

    list.addEventListener('mouseleave', function(event) {
        if (event.target && event.target.classList.contains('list-item')) {
            hoverSound.pause();
            hoverSound.currentTime = 0;
            extra.style.backgroundImage = '';
            backgroundOverlay.style.opacity = '0';
        }
    });

    list.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('list-item')) {
            clickSound.play();
        }
    });
});
}

extra()

function forth() {

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.page4',
      scroller: 'body',
      start: 'top 10%',
      end: 'top -250%',
      scrub: 2,
      pin: true,
    }
  }, "+=1")

  var tl2 = gsap.timeline({
    scrollTrigger : {
      trigger: '.page4',
      scroller: 'body',
      start: 'top 60%',
      end: 'top 40%',
      scrub: 2,
    }
  })

  tl2.from(".page4 .heading h2", {
    x: -100,
    opacity: 0, 
  },"y")

  tl2.from(".page4 .heading p", {
    x: 100,
    opacity: 0,
  },"y")

  tl2.from(".page4 .left", {
    y: 100,
    opacity: 0,
  },"z")

  // tl2.from(".page4 .images", {
  //   y: 100,
  //   opacity: 0,
  // },"z")

  tl.to('.page4 .left', {
    rotation: 100,
  }, "x")

  tl.to('.page4 .images', {
    transform: 'translateX(-220vw)'
  }, "x", )

  tl.to('.page4 .images img', {
    x: -100,
    // duration: 1,
  }, "x")
}

forth();

function fifth() {
  var tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: ".page5",
      pin: true,
      scrub: 2,
      start: "top 10%",
      end: "top -500%"
    }
  });

  gsap.from(".page5 .heading h2", {
    opacity: 0,
    scale : 0,
    scrollTrigger : {
      trigger: '.page5',
      scroller: 'body',
      start: 'top 30%',
      end: 'top 60%',
      scrub: 2,
    }
  },"x")
  gsap.from(".page5 .heading p", {
    opacity: 0,
    scale : 0,
    scrollTrigger : {
      trigger: '.page5',
      scroller: 'body',
      start: 'top 30%',
      end: 'top 60%',
      scrub: 2,
    }
  },"x")

  tl.from(".page5 .first", {
    // transform : "translateY(80vw)" ,
    y: "70vh",
    ease: "slow(0.7,0.7,true)",
  })

  tl.to(".page5 .first", {
    scale: 0.8,
    opacity: 0
  }, "I")

  tl.to(".page5 .second", {
    // transform : "translateY(80vw)" ,
    y: "-70vh",
    ease: "slow(0.7,0.7,true)",
  }, "I")

  tl.to(".page5 .second", {
    scale: 0.8,
    opacity: 0
  }, "II")

  tl.to(".page5 .third", {
    // transform : "translateY(80vw)" ,
    y: "-140vh",
    ease: "slow(0.7,0.7,false)",
  }, "II")

  tl.to(".page5 .third", {
    scale: 0.8,
    opacity: 0
  }, "III")

  tl.to(".page5 .forth", {
    // transform : "translateY(80vw)" ,
    y: "-210vh",
    ease: "slow(0.7,0.7,false)",
  }, "III")

  tl.to(".page5 .forth", {
    scale: 0.8,
    opacity: 0
  }, "IV")

  tl.to(".page5 .fifth", {
    // transform : "translateY(80vw)" ,
    y: "-280vh",
    ease: "slow(0.7,0.7,false)",
  }, "IV")

  tl.to(".page5 .fifth", {
    scale: 0.8,
    opacity: 0
  })

}

fifth()

function sixth() {
  gsap.to(".page6 .images", {
      x: "-100%",
      ease: "power2.inOut",
      scrollTrigger: {
          trigger: ".page6",
          pin: true,
          start: "top 10%",
          end: "top -300%",
          scrub: 2,
      }
  });
}

sixth();

function seventh(){
  var tl = gsap.timeline({
    scrollTrigger : {
      scroller : "body",
      trigger : ".page7",
      start : "top 80%",
      end : "top 40%",
      // markers : true,
      scrub : 2,
    }
  })

  tl.from(".page7 .heading h2",{
      x : 200,
      opacity : 0
  },"x`")

  tl.from(".page7 .heading p",{
      x : -200,
      opacity : 0
  },"x`")

  tl.from (".page7 img",{
    y : 400,
    opacity : 0,
    scale : 0,
    duration : 2,
  })

}

seventh()

function brands(){
  gsap.from(".brands", {
    y: 100,
    opacity : 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".brands",
        start: "top 90%",
        end: "top 80%",
        // duration: 2,
        scrub: 2,
    }
});
}

brands()

function footer(){
  gsap.from(".footer .upper .heading", {
    x : "-30vw",
    opacity : 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
    }
},"x");
  gsap.from(".footer .upper .text", {
    x : "30vw",
    opacity : 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 70%",
        end: "top 50%",
        scrub: 2,
    }
},"x");
}

footer()