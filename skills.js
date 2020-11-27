//grabing the elements
let ring = document.querySelectorAll('.ring');
let ring1 = document.getElementById('ring1');
let ring2 = document.getElementById('ring2');
let skill = document.querySelectorAll('.skill');
let head = document.querySelectorAll('.char');
//making the animation

const tl = new TimelineMax();

tl.from(ring1, 1.5, {rotate:360, repeat:-1, ease:Linear.easeNone})
.from(ring2, 1, {rotate:-360, repeat:-1, ease:Linear.easeNone})
.from(ring,1.5, {y:200, stagger:.25},'-=1.5')
.to(ring, .6, {x:70})
.from(head,1,{opacity:0, stagger:0.1})
.from(skill,1, {y:100,opacity:0, stagger:.2})
//.from(skill,.5, {y:10, ease:Sine.easeInOut, stagger:.4},"-=1.5")