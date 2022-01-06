/* start navbar */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const headerNavbar = document.querySelector('.header-navbar');

const navSlide = ()=> {
    burger.addEventListener('click', ()=> {
      nav.classList.toggle('show');
    });
  }
const navClose = ()=> {
    nav.classList.remove('show');
}

  navSlide();
/* end navbar */

/* start animations for sections */
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(
    function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slide => {
    appearOnScroll.observe(slide);
})
/* end animations for sections */

/* start scroll up btn */
const scrollUpBtn = document.querySelector('.scrollUpBtn');

const scrollToTop = () => {
    scrollUpBtn.classList.add('hidden');
    window.scrollTo(0,0);
  }

const init= (e)=> {
    scrollUpBtn.classList.add('hidden');
}

const scrollHandeler = ()=> {
if(window.scrollY >= 70) {
    headerNavbar.classList.add('fixed');
    scrollUpBtn.classList.remove('hidden');
}else{
    headerNavbar.classList.remove('fixed');
    scrollUpBtn.classList.add('hidden');

  }
}

window.addEventListener('load', init);   
window.addEventListener('scroll', ()=> {
    scrollHandeler();
  });

/* start nav bar fixed issues */
 const navLinks = document.querySelectorAll('.nav-link')
 const menuToggle = document.getElementById('navbarNavDropdown')
 
 const menu = ()=> {
    const bsCollapse = new bootstrap.Collapse(menuToggle);
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { bsCollapse.toggle() })
    })
 }

//  window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });
//  menuToggle.addEventListener('click', menu);