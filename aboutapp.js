//grabing the elements
let w = document.getElementById('main').offsetHeight;
let i = document.getElementById('img').offsetHeight;
let l = document.getElementById('link').offsetHeight;
let name = document.getElementById('name');
let desc = document.getElementById('desc');
let magic = document.getElementById('magic');
let nav = document.getElementById('nav');
let main = document.getElementById('main');
console.log(w);
console.log(l);
let photo = document.querySelector('.profile-photo');
let link = document.getElementById('links');
let linkI = document.getElementById('link');

const op = new TimelineMax();

op.from(main, 2, {x:100, ease:'elastic.out'} )
 .from(nav,1,{y:-100, ease:'elastic.out'}, '-=1')

function down(){
    const tl = new TimelineMax();
    tl.to(photo, 1.5, {y:w-1.5*i, ease:'bounce.out'})
    .to(photo,1.5,{rotation:80}, '-=1.5')
    .to(link, 1.5, {y:w-1.5*i-100, ease:'bounce.out'},"-=1.2")
    .to(link,1.5,{rotation:-160}, '-=1.5')
    .to(name, 1.5, {y:w-1.5*i+80, ease:'bounce.out'},"-=1.2")
    .to(name,1.5,{rotation:-160}, '-=1.5')
    .to(desc, 1.5, {y:w-1.5*i-20, ease:'bounce.out'},"-=1.2")
    .to(desc,1.5,{rotation:-180}, '-=1.5')
    .to(magic, 1.5, {y:w-1.5*i-100, ease:'bounce.out'},"-=1.2")
    .to(magic,1.5,{rotation:180}, '-=1.5')
    .to(nav, 1.5, {y:w-1.5*i+200, ease:'bounce.out'},"-=1.2")
    .to(nav,1.5,{rotation:180}, '-=1.5')
}
