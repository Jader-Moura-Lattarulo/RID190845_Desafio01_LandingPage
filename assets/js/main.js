const images = ["./assets/images/project01.svg", "./assets/images/project02.jpeg", "./assets/images/project03.jpg",  "./assets/images/project04.jpg"];
let currentIndex = 0;

function changeImage() {
    const imgElement = document.getElementById("image_slider");

    imgElement.style.opacity = 0;
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
        imgElement.style.opacity = 1;
    }, 900);

}

setInterval(changeImage, 3500);
