let nav = document.getElementById('nav');
// function displayMenu(){

// }
let ham = document.getElementById('ham');
ham.addEventListener('click', function(){
    if(nav.style.display === 'none'){
        nav.style.display = 'block';
    }else{
        nav.style.display = 'none'
    }
})


let fspanw = document.querySelector(".front-heading");

const head = new TimelineMax();
head.from(fspanw,.6,{opacity:0,rotate:90})

/// grabbing all the project-sections
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');

//grabing all the slogan
let ps1 = document.querySelector('.ps1');
let ps2 = document.querySelector('.ps2');
let ps3 = document.querySelector('.ps3');
let ps4 = document.querySelector('.ps4');


///grabbing all the ribbons
let pd1 = document.querySelector('.pd1');
let pd2 = document.querySelector('.pd2');
let pd3 = document.querySelector('.pd3');
let pd4 = document.querySelector('.pd4');

//grabbing all the project-desc
let pi1 = document.querySelector('.pi1');
let pi2 = document.querySelector('.pi2');
let pi3 = document.querySelector('.pi3');
let pi4 = document.querySelector('.pi4');

//grabbing all the links
let pl1 = document.querySelector('.pl1');
let pl2 = document.querySelector('.pl2');
let pl3 = document.querySelector('.pl3');
let pl4 = document.querySelector('.pl4');

//first time line

let tl1 = gsap.timeline({
        scrollTrigger:{
            trigger:p1,
            start:'top center',
            toggleActions:'restart none none reset'
        }
});
tl1.from(ps1,1, {x:100})
.from(pi1, 1, {opacity:0,y:50})


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:p2,
        start:'top center',
        toggleActions:'restart none none reset'

    }
});
tl2.from(ps2,1, {x:100})
.from(pi2, 1, {opacity:0,y:50})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:p3,
        start:'top center',
        toggleActions:'restart none none reset'

    }
});
tl3.from(ps3,1, {x:100})
.from(pi3, 1, {opacity:0,y:50})

let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:p4,
        start:'top center',
        toggleActions:'restart none none reset'

    }
});
tl4.from(ps4,1, {x:100})
.from(pi4, 1, {opacity:0,y:50})

