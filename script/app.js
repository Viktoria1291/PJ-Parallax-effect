// Это для параллакса:
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
});



// Это для двух видов скролла (вниз и вглубь):
window.addEventListener("scroll", function () {
	var pic2 = document.getElementById("secret1");
	var pic3 = document.getElementById("secret2");
	var pic4 = document.getElementById("secret3");

	var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

	if (scrollPosition >= pic2.offsetTop && scrollPosition < pic2.offsetTop + pic2.offsetHeight) {
		pic2.style.position = "fixed";
		pic2.style.top = "0";
	} else {
		console.log('Ошибка');
		pic2.style.position = "relative";
	}
/*
	if (scrollPosition >= pic3.offsetTop && scrollPosition < pic3.offsetTop + pic3.offsetHeight) {
		pic3.style.position = "fixed";
		pic3.style.top = "0";
	} else {
		pic3.style.position = "relative";
	}

	if (scrollPosition >= pic4.offsetTop && scrollPosition < pic4.offsetTop + pic4.offsetHeight) {
		pic4.style.position = "fixed";
		pic4.style.top = "0";
	} else {
		pic4.style.position = "relative";
	}*/
});