let message = document.querySelectorAll('.letter');


const tl = new TimelineMax();

tl.from(message, 1.5, {opacity:0, rotation:80,stagger:0.15, ease:'bounce.out'});