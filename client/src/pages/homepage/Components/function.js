gsap.from('.hero-text', {
	opacity: 0, 
	duration: 2, 
	y: -50
})

gsap.from('.boxes', {
	scrollTrigger: '.boxes',
	opacity: 0,
	y: 50,
	duration: 0.6,
	scale: 0.9
})

gsap.from('.midwayTextContainer h2', {
	scrollTrigger: '.midwayTextContainer',
	opacity: 0,
	y: 80,
	duration: 1,
})

gsap.from('.midwayTextContainer h4', {
	scrollTrigger: '.midwayTextContainer',
	opacity: 0,
	y: 50,
	duration: 1.2,
})

gsap.from('.odd', {
	scrollTrigger: '.odd',
	opacity: 0,
	x: -100,
	duration: 0.7,
	scale: 0.9,
	stagger: 1
})

gsap.from('.even', {
	scrollTrigger: '.even',
	opacity: 0,
	x: 100,
	duration: 0.7,
	scale: 0.9,
	stagger: 1
})


