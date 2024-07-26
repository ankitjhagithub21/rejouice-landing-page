
gsap.registerPlugin(ScrollTrigger);

function page2Animation() {
    ScrollTrigger.create({
        trigger: '#page2',
        start: 'top center',
        onEnter: () => {
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
