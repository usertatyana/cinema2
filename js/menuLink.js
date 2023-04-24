import {
    getPopular,
    getTop,
    getTriends
} from './services.js';
import renderCard from './renderCard.js';

const title = document.querySelector('.other-films__title');
const filmWeek = document.querySelector('.film-week');
const getNav = document.querySelectorAll('.get-nav');
console.log('getNav: ', getNav)

const menuLink = () => {
    getNav.forEach(nav => {
        nav.addEventListener('click', event => {
            const target = event.target.closest('.get-nav__link');
            if (target) {
                event.preventDefault();

                filmWeek.getElementsByClassName.display = 'none';
                title.textContent = target.textContent
                // Тренды
                if (target.classList.contains('get-nav__link_triends')) {
                    getTriends('all')
                    .then(data => renderCard(data.results));
                }
                // Популярные фильмы
                if (target.classList.contains('get-nav__link_popular-movies')) {
                    getPopular('movie')
                    .then(data => renderCard(data.results));
                }
                // Популярные сериалы
                if (target.classList.contains('get-nav__link_popular-tv')) {
                    getPopular('tv')
                    .then(data => renderCard(data.results));
                }
                // Топ филмов
                if (target.classList.contains('get-nav__link_top-movies')) {
                    getTop('movie')
                    .then((data) => renderCard(data.results));
                }
                // Топ сериалов
                if (target.classList.contains('get-nav__link_top-tv')) {
                    getTop('tv')
                    .then((data) => renderCard(data.results));
                }
            }

        })
    })
};

export default menuLink;
