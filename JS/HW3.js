let div = document.querySelector(`.s1`);
let divScore=document.querySelector(`.score`);
let divAvgScore=document.querySelector(`.avg-score`);
(function loading() {
    for (let i = 0; i < 5; i++) {
        div.innerHTML += `<img class="star" id="${i}" src="./image/cat.png">`;
    }
}());


let images = document.querySelectorAll('img');

let count=0;

for (let image of images) {
    image.addEventListener('mouseover', mouseOver);
    image.addEventListener('mouseout', mouseOut);
    image.addEventListener('click', Click);
    image.addEventListener('dblclick', dBlclick);
}

function mouseOver() {
    //console.log(this.id);
    for (let i = 0; i <= this.id; i++) {
        images[i].classList.remove("star");
        images[i].classList.add("star_hover");
    }
}

function mouseOut() {
    for (let image of images) {
        image.classList.remove("star_hover");
        image.classList.add("star")
    }
}

let score=0;

function Click() {
    console.log(this.id);
    score+=parseInt(this.id)+1; 
    count++;
    for (let i = 0; i <= this.id; i++) {
        images[i].classList.remove("star");
        images[i].classList.add("star_hover");
    }
    for (let image of images) {
        image.removeEventListener('mouseover', mouseOver);
        image.removeEventListener('mouseout', mouseOut);
        image.removeEventListener('click', Click);
    }
    divScore.innerHTML=`<p class="score">此次評分為${(parseInt(this.id))+1}感謝您</p>`;
    divAvgScore.innerHTML=`<p class="avg-score">平均分數為${(score/count).toFixed(1)}</p>`;
}

function dBlclick() {
    for (let image of images) {
        image.className = `star`;
        image.addEventListener('mouseover', mouseOver);
        image.addEventListener('mouseout', mouseOut);
        image.addEventListener('click', Click);
        image.classList.add("star");
    }
}

