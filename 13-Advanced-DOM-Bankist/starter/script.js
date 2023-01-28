'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tabs');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(button => button.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//button scrolling
btnScrollTo.addEventListener('click', function(e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth' });
})

//page navigation
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
    
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
//   });
// })

//1. add event listener to common parent element
//2. determine what element originated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();    

  //matching strategy:
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  
  }
})

//tabbed component
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);

  //guard clause - return early if con is matched 
  if (!clicked) return;

  //remove active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //activate tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const linkClick = e.target;
    const siblings = linkClick.closest('.nav').querySelectorAll('.nav__link');
    const logo = linkClick.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== linkClick) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
}

//passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation - method 1
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY); 

//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// })

//sticky navigation - method 2: intersection observer API
// const obsCallback = function(entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   //root - element that the target is intersecting
//   root: null,
//   //threshold - % of intersection at which obsCallBack is called
//   threshold: [0. 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();
console.log(navHeight);

const stickyNav = function(entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');  
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '90px',
});
headerObserver.observe(header);









///////////////////////////////////////
///////////////LECTURES////////////////
///////////////////////////////////////

//////////selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('#section--1');
// const allBUttons = document.getElementsByTagName('button');
// console.log(allBUttons);

// console.log(document.getElementsByClassName('btn'));

/////////creating and inserting elemnts 
//.insertAdjacentHTML
//const message = document.createElement('div');
// message.classList.add('cookie-message');
//message.textContent = 'we use cookies for improved functionality and analytics';
// message.innerHTML = 'we use cookies for improved functionality and analytics <button class="btn btn--close-cookie">got it</button>'
//header.prepend(message); //first child
//header.append(message); //moves child from being first, to last child 

//Delete Elements
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//   message.remove();
// })

//////////Styles, Attributes, Classes
// message.style.background = '#37383d';
// message.style.width = '120%';

// console.log(message.style.height); //only work for inline styles
// console.log(message.style.backgroundColor); 

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// //root = document in JS
// document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes 
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.setAttribute('company', 'Bankist');
// console.log(logo.setAttribute);

// const link = document.querySelector('.twitter-link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//data attributes
// console.log(logo.dataset.versionNumber);

//classes - simple to use. remove/add names without changing a lot of the classes there
// logo.classList.add('c')
// logo.classList.remove('c')
// logo.classList.toggle('c')
// logo.classList.contains('c');


//////////////types of events and event handlers
//event is a signal generated by certain DOM node. single = something that has happened
// const alertH1 = document.querySelector('h1');
// alertH1.addEventListener('mouseenter', function(e) {
//   alert('addEventListener: Great, you are reading the heading');
// });

// alertH1.onmouseenter = function (e) {
//   alert('addEventListener: Great, you are reading the heading');
// }

// setTimeout(() => alertH1.removeEventListener('mouseenter', alertH1), 1000);

////////////event bubbling and capturing
//capturing happens at the top of the DOM tree. each event then travels down 
//from document route to target element and passes through even element of tree

//target phase happens next. where events can be handled right at the target

//bubbling phase - bubbles up from target to document route and goes through 
//each of the parent elements in the DOM tree back to the document 

////////////event propagation in practice
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
//console.log(randomColor);
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   console.log('LINK', e.target);
//   this.style.backgroundColor = randomColor();

  //stop propagation
  // e.stopPropagation();
// })
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log('CONTAINER', e.target);
//   this.style.backgroundColor = randomColor();
// })
// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log('NAV', e.target);
//   this.style.backgroundColor = randomColor();
// })

//////////////////////DOM traversing - walking through the DOM
// const h1 = document.querySelector('h1');

//going downwards: child 
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children); //direct children
// console.log(h1.firstElementChild.style.color = 'white');
// console.log(h1.lastElementChild.style.color = 'orangered');

//going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

//going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (e) {
//   if (e !== h1) e.style.transform = 'scale(0.5)';
// })


