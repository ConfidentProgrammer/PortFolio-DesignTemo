//grabing the elements

let ribbon = document.querySelector('.ribbon-div');
let mainBody = document.querySelector('.main-body');
let desc = document.querySelectorAll('.all');
let ball = document.querySelectorAll('.ball');
const tl = new TimelineMax();

// let menu = document.createElement('div');
// menu.setAttribute('id', 'menu');
// let menuStyle = document.getElementById('menu');
// let a1 =  document.createElement('a');
// a1.classList.add('menu-links');
// a1.setAttribute('href', "#");
// a1.innerHTML = "About";
// let a2 =  document.createElement('a');
// a2.classList.add('menu-links');
// a2.setAttribute('href', "#");
// a2.innerHTML = "Skills";
// let a3 =  document.createElement('a');
// a3.classList.add('menu-links');
// a3.setAttribute('href', "#");
// a3.innerHTML = "Experience";
// let a4 =  document.createElement('a');
// a4.classList.add('menu-links');
// a4.setAttribute('href', "#");
// a4.innerHTML = "Projects";

// // let ham = document.querySelector('.ham-logo');
// function hamMenu(){



//     //selecting div for the style
//     menu.style.position = 'absolute';
//     menu.style.width  = '200px';
//     menu.style.height  = '300px';
//     menu.style.background='red';
//     menu.style.textAlign = "center";
//     //editing the links
//     a1.style.textDecoration = 'none';
//     a2.style.textDecoration = 'none';
//     a3.style.textDecoration = 'none';
//     a4.style.textDecoration = 'none';

//     a1.style.color='white';
//     a2.style.color='white';
//     a3.style.color='white';
//     a4.style.color='white';

//     menu.appendChild(a1);
//     menu.appendChild(a2);
//     menu.appendChild(a3);
//     menu.appendChild(a4);
//     mainBody.appendChild(menu);

// }


tl.fromTo(mainBody, 1.5, { height: '0%' }, { height: '95%', ease: 'bounce.out' })
    .from(ribbon, 1, { x: 200, ease: 'easeInOut' }, '-=1.5')
    .fromTo(desc, .5, { opacity: 0 }, { opacity: 1 }, "-=1")
    .to(ball,1.3,{y:-10, ease:'elastic.out', stagger:.1})
    .to(ball,1,{y:0, ease:'elastic.out', stagger:.1}, '-=1.3')



