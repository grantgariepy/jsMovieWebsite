//imports
// const express = require('express');
// const app = express();
// const port = 3000


// Static FIles
// app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'Public/css'))
// app.use('/js', express.static(__dirname + 'Public/js'))
// app.use('/img', express.static(__dirname + 'Public/img'))

//Set Views
// app.set('views', './views')
// app.set('view engine', 'ejs')

// app.get('', (req, res) => {
//   res.render('index', { text: "This is ejs"})
// })

// app.get('/about', (req, res) => {
//   res.render('about', { text: "About Page"})
// })

const imdb = require('imdb-api');
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Listen on port 3000
app.listen(port, () => console.info(`App listening on port ${port}`))


imdb.get({name: 'The Lighthouse'}, {f3011be7, timeout: 30000}).then(console.log).catch(console.log);

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  //const tvshowMenu = document.querySelector('#tvshows-page');
  const moviesMenu = document.querySelector('#movies-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);


  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    tvshowMenu.classList.add('highlight');
    moviesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    moviesMenu.classList.add('highlight');
    tvshowsMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);