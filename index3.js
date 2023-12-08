//toggle class active//
const navbarnav = document.querySelector('.navbar-nav');
//ketika menu di klik//
document.querySelector('#menu').onclick = () =>{
navbarnav.classList.toggle('active');
};

//toggle class active untuk menu//
const searchform = document.querySelector('.search-form');
const searchbox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = () => {
    searchform.classList.toggle('active');
    searchbox.focus();
    e.preventdefault();
}

//klik diluar element//
const menu = document.querySelector('#menu');
const sb = document.querySelector(search-button);

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarnav.contains(e.target)){
        navbarnav.classList.remove('active')
    }
    if(!sb.contains(e.target) && !searchform.contains(e.target)){
        searchform.classList.remove('active')
    }
})
