//grabing the elements

let ribbon = document.querySelector('.ribbon-div');
let mainBody = document.querySelector('.main-body');
let desc = document.querySelectorAll('.all');
let body = document.querySelector('body');

const tl = new TimelineMax();

tl.fromTo(mainBody, 1.5, {height:'0%'}, {height:'95%', ease:'bounce.out'})
.from(ribbon, 1, { x:200 , ease:'easeInOut'},'-=1.5')
.fromTo(desc, .5, {opacity:0}, {opacity:1}, "-=1")


