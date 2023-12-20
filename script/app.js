window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});

/*ScrollTrigger.create({ 
	trigger: ".secret1", 
	start: "top top", 
	end: "bottom bottom", 
	pin: true, 
	markers: true });*/