import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sliderCarousel from './modules/sliderCarousel';
import changePic from './modules/changePic';
import fieldsValidation from './modules/fieldsValidation';
import calc from './modules/calc';
import sendFormAll from './modules/sendFormAll';

// Timer
countTimer('10 september 2021');
// Меню
toggleMenu();
// Popup
togglePopup();
// Табы
tabs();
// Слайдер
slider();
//Слайдер карусель
sliderCarousel();
// Смена фото
changePic();
// Валидация полей ввода
fieldsValidation();
// Калькулятор
calc();
// Ajax запрос
sendFormAll();
