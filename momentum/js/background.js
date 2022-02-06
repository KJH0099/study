
const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//문서 내에 bgimg 객체 생성 
const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;

document.body.appendChild(bgimg);