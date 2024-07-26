gsap.from('#page2 h1',{
    y:100,
    delay:0.3,
    duration:0.5,
    
    opacity:0
})

gsap.from('#page2 span',{
    y:30,
    delay:0.5,
    duration:0.5,
    stagger:0.5,
    opacity:0
})


gsap.to('.line',{
    width:"100%",
    duration:2,
    delay:0.3
})