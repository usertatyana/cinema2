import slideMenu  from './menu.js';
import renderVideo from './renderVideo.js';

slideMenu({
    openBtn: '.header__burger-btn', 
    menu: '.navigation',
    closeTrigger: 'navigation_active',
    classActiveMenu: '.navigation__link, .navigation__close'
});

renderVideo();