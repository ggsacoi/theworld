const image = document.querySelectorAll('.image');
const button = document.querySelector('button');
const chars = document.querySelectorAll('.char');
let clickCount = 0;
let isTimeoutActive = false;

image.forEach((img) => {
    img.width = 200;
});

button.addEventListener('click', () => {
    if (clickCount >= 10 || isTimeoutActive) return;
    isTimeoutActive = true;

    const card = document.querySelector('.container'); // <img class="container" ... >

    // Créer l'élément vidéo
    const video = document.createElement('video');
    video.width = 900;
    video.autoplay = true;

    const source = document.createElement('source');
    source.src = "Monkey D Luffy Edit.mp4";
    source.type = "video/mp4";
    video.appendChild(source);

    // Masquer l'image et afficher la vidéo à la place
    card.style.display = "none";
    card.parentNode.insertBefore(video, card);

    setTimeout(() => {
        // Choisir une image au hasard
        const randomIndex = Math.floor(Math.random() * image.length);
        const selectedImg = image[randomIndex];
        // Mettre à jour la source de l'image principale
        card.src = selectedImg.src;
        // Afficher l'image et retirer la vidéo
        card.style.display = "";
        video.remove();

        // Mettre à jour le char correspondant au numéro du clic
        const chars = document.querySelectorAll('.char');
        if (chars.length > clickCount) {
            chars[clickCount].src = selectedImg.src;
        }

        clickCount++;
        isTimeoutActive = false;
    }, 10000); // 10000 ms = 10 secondes
});