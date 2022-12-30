var tl = gsap.timeline();
tl.from("#loader img", {
	scale: 0,
	duration: 1,
	delay: 0.9,
	opacity: 0,
});
tl.to("#loader", {
	top: -700,
	duration: 3,
	delay: 0.2,
});
tl.from("#nav", {
	y: -15,
	duration: 1,
	delay: 0.2,
	opacity: 0,
});
tl.from("#left h2", {
	x: -70,
	opacity: 0,
	duration: 0.5,
});
tl.from("#left h1", {
	x: -70,
	opacity: 0,
	duration: 0.2,
});
tl.from("#left h5", {
	x: -70,
	opacity: 0,
	duration: 0.2,
});
tl.from("#left p", {
	x: -70,
	opacity: 0,
	duration: 0.1,
});
tl.from("#left button", {
	scale: 0.5,
	opacity: 0,
	duration: 1,
});
tl.from("#main>img", {
	opacity: 0,
	duration: 1,
	delay: 0.5,
	rotate: 170,
});
tl.from("main>h1", {
	opacity: 0,
});
tl.from("#footer", {
	opacity: 0,
	y: 15,
	duration: 1,
	delay: 0.2,
});
