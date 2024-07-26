gsap.registerPlugin(ScrollTrigger);
function smoothScroll(){
    // Register GSAP ScrollTrigger plugin


// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

// Update ScrollTrigger whenever Locomotive Scroll updates
locoScroll.on("scroll", ScrollTrigger.update);

// Use the scroller proxy to sync Locomotive Scroll with ScrollTrigger
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// Add event listeners and refresh functions
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
smoothScroll()

// Define your page animations
function page1Animation() {
  const page1 = document.getElementById('page1');
  page1.addEventListener('mouseenter', () => {
    gsap.to('#crsr', {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener('mousemove', (dets) => {
    gsap.to('#crsr', {
      left: dets.x - 75,
      top: dets.y - 75,
    });
  });
  page1.addEventListener('mouseleave', () => {
    gsap.to('#crsr', {
      scale: 0,
      opacity: 0,
    });
  });
}
page1Animation();

function page2Animation() {
  ScrollTrigger.create({
    trigger: '#page2',
    start: 'top center',
    scroller: '#main', // Add scroller property
    onEnter: () => {
      gsap.set('.line', { width: '0%' });
      gsap.from('#page2 h1', {
        y: 100,
        duration: 0.5,
        opacity: 0
      });

      gsap.from('#page2 span', {
        y: 30,
        duration: 0.5,
        stagger: 0.5,
        opacity: 0
      });

      gsap.to('.line', {
        width: "100%",
        duration: 2
      });
    },
    onEnterBack: () => {
      gsap.set('.line', { width: '0%' });
      gsap.from('#page2 h1', {
        y: 100,
        duration: 0.5,
        opacity: 0
      });

      gsap.from('#page2 span', {
        y: 30,
        duration: 0.5,
        stagger: 0.5,
        opacity: 0
      });

      gsap.to('.line', {
        width: "100%",
        duration: 2
      });
    }
  });
}

page2Animation();
