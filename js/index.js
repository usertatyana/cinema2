import slideMenu  from './menu.js';


slideMenu({
    openBtn: '.header__burger-btn', 
    menu: '.navigation',
    closeTrigger: 'navigation_active',
    classActiveMenu: '.navigation__link, .navigation__close'
});