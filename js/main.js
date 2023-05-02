VANTA.NET('#body');
VANTA.NET({
    el: "#body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100.00,
    minWidth: 100.00,
    translateX: [100.00, 200.00],
    scale: .5,
    scaleMobile: 1.00,
    color: '#c00965',
    backgroundColor: '#eee'
})

const list1 = document.getElementById('list1');
const list2 = document.getElementById('list2');
const list3 = document.getElementById('list3');
const list4 = document.getElementById('list4');

const design = document.getElementById('design');
const dev = document.getElementById('dev');
const safety = document.getElementById('safety');

const xDesign = document.getElementById('x-design');
const xDev = document.getElementById('x-dev');
const xSafety = document.getElementById('x-safety');

design.classList.add('hide');
dev.classList.add('hide');
safety.classList.add('hide');

list1.addEventListener('click', function() {
    design.classList.remove('hide');
    anime({
        targets: '.list-design',
        opacity: [0,1],
        duration: 10000,
        direction: 'linear',
    });
});
xDesign.addEventListener('click', function() {
    design.classList.add('hide');
});
list2.addEventListener('click', function() {
    dev.classList.remove('hide');
    anime({
        targets: '.list-dev',
        opacity: [0,1],
        duration: 10000,
        direction: 'linear',
    });
});
xDev.addEventListener('click', function() {
    dev.classList.add('hide');
});
list4.addEventListener('click', function() {
    safety.classList.remove('hide');
    anime({
        targets: '.list-safety',
        opacity: [0,1],
        duration: 10000,
        direction: 'linear',
    });
});
xSafety.addEventListener('click', function() {
    safety.classList.add('hide');
});