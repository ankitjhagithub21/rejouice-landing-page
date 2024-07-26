function page1Animation(){
    const page1 = document.getElementById('page1')
    page1.addEventListener('mouseenter',()=>{
        gsap.to('#crsr',{
            scale:1,
            opacity:1,
           
        })
    })
    page1.addEventListener('mousemove',(dets)=>{
        gsap.to('#crsr',{
           
            left:dets.x-75,
            top:dets.y-75,
        })
    })
    page1.addEventListener('mouseleave',()=>{
        gsap.to('#crsr',{
            scale:0,
            opacity:0,
            
        })
    })
}
page1Animation()

function page2Animation() {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
        trigger: '#page2',
        start: 'top center',
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
            gsap.set('.line', { width: '0%' }); // Reset the width before animation
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




