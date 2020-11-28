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

// function makeBalls(){
//     let left = 10;
//     //make balls use span elements if possible
//     for(let i=0 ; i<30 ; ++i){
        
//         let ball = document.createElement('span');
//         ball.classList.add('ball');
//         ball.style.position="absolute";
//         ball.style.zIndex="10000";
//         ball.style.top="0";
//         ball.style.left=left +'px'; 
//         ball.style.width="50px";
//         ball.style.height="50px";
//         ball.style.borderRadius="50%";
//         ball.style.background=" linear-gradient(135deg, rgb(106, 219, 157) 0%, rgb(23, 167, 88) 100%)";
//         document.body.appendChild(ball);
//         left+=50;
//     }
//     //give every ball a class of .ball
//     const animate = new TimelineMax();
//     let ball = document.querySelectorAll('.ball');
//     animate.to(ball, .6, {y:400, ease:'bounce.out', stagger:0.1});
//     setInterval(makeBalls,4000);
   
// }
