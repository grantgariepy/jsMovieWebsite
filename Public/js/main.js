function searchForMovie() {
    var request = new XMLHttpRequest()
    var title = document.getElementById('movieTitle').value;

    //open new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://www.omdbapi.com/?t=' + title + '&apikey=f3011be7&', true)
    document.getElementById('requestText').value= 'http://www.omdbapi.com/?apikey=f3011be7&t=' + title;
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        if (request.status >= 200 && request.status < 400) {
            document.getElementById('result').innerHTML = this.response;
        } else {
            console.log('error')
        }
    }
    request.send()
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// imdb.get({name: 'The Lighthouse'}, {f3011be7, timeout: 30000}).then(console.log).catch(console.log);

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const tvshowMenu = document.querySelector('#tvshows-page');
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