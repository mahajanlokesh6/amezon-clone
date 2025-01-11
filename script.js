const slider = document.querySelector('.slider');
let currentIndex = 0;

function slideImages() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(slideImages, 3000);
