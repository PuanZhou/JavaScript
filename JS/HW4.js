const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const smallImages = document.querySelectorAll('.small-slide img');

//buttons

const prevBrn = document.querySelector('#prevBtn');
const nextBrn = document.querySelector('#nextBtn');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');


let counter = 1;
let index = 0;

let myInterval;

smallImages[index].className = 'small-slide-select';

const size = carouselImages[0].clientWidth;


carouselSlide.style.transform = `translateX(${(-size * counter)}px)`;

nextBrn.addEventListener('click', () => {

    smallImages[index].className = 'small-slide-img';

    index++;
    if (index > smallImages.length - 1) {
        index = 0;
    }
    smallImages[index].className = 'small-slide-select';

    if (counter >= carouselImages.length - 1) {
        return;
    }

    carouselSlide.style.transition = `transform 1s ease-in-out`;
    counter++;
    carouselSlide.style.transform = `translateX(${(-size * counter)}px)`;

});


prevBrn.addEventListener('click', () => {
    smallImages[index].className = 'small-slide-img';
    index--;
    if (index < 0) {
        index = smallImages.length - 1;
    }
    smallImages[index].className = 'small-slide-select';
    if (counter <= 0) {
        return;
    }
    carouselSlide.style.transition = `transform 1s ease-in-out`;
    counter--;
    carouselSlide.style.transform = `translateX(${(-size * counter)}px)`;

});

carouselSlide.addEventListener('transitionend', () => {

    if (carouselImages[counter].id == 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = `translateX(${(-size * counter)}px)`;
    }

    if (carouselImages[counter].id == 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${(-size * counter)}px)`;
    }
});

play.addEventListener('click',clickPlay);

function clickPlay(){
    myInterval=setInterval(Play,2000);
    play.removeEventListener('click',clickPlay);
}


pause.addEventListener('click', () => {
    clearInterval(myInterval);
    play.addEventListener('click',clickPlay);
})

function Play() {
    smallImages[index].className = 'small-slide-img';

    index++;
    if (index > smallImages.length - 1) {
        index = 0;
    }
    smallImages[index].className = 'small-slide-select';

    if (counter >= carouselImages.length - 1) {
        return;
    }

    carouselSlide.style.transition = `transform 1s ease-in-out`;
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}



