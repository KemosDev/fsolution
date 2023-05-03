// menuBar //
const menuPhoneCont = document.getElementById('menu-phone-cont');
const bar = document.getElementById('bar');
const arrow = document.getElementById('arrow');

menuPhoneCont.style.transform = 'scale(0)';

bar.addEventListener('click', function() {
    menuPhoneCont.style.cssText = 'tranform: scale(1); transform-origin: left center';
});
arrow.addEventListener('click', function() {
    menuPhoneCont.style.cssText = 'transform: scale(0); transform-origin: top center';
});

// body //
const main = document.querySelector('main');
const marketButton = document.getElementById('market-button');
const marketPhone = document.getElementById('market-phone');
const market = document.getElementById('market');
const x = document.getElementById('x');

market.style.transform = 'scale(0)';
marketPhone.style.transform = 'scale(0)';


marketButton.addEventListener('click', function() {
    market.style.cssText = 'transform: scale(1); transform-origin: center center'
});
marketPhone.addEventListener('click', function() {
    market.style.cssText = 'transform: scale(1); transform-origin: center center'
});
x.addEventListener('click', function() {
    market.style.cssText = 'transform: scale(0); transform-origin: center center'
});

