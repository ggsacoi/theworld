document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'makilaaz0.jfif',
        'Makilaaz0 (2).jfif',
        'Makilaaz0 (2).jpg',
       'Makilaaz0 (2).png',
        'Makilaaz0 (3).jfif',
        'Makilaaz0 (3).jpg',
        'Makilaaz0 (3).png',
        'Makilaaz0 (3).webp',
        'Makilaaz0 (4).jfif',
        'Makilaaz0 (4).png',
        'Makilaaz0 (4).jpg',
        'Makilaaz0 (15).png',
        'Makilaaz0 (4).webp',
        'Makilaaz0 (5).jfif',
        'Makilaaz0 (18).png',
        'Makilaaz0 (5).jpg',
        'Makilaaz0 (5).png',
        'Makilaaz0 (5).webp',
        'Makilaaz0 (6).jfif',
        'Makilaaz0 (13).png',
        'Makilaaz0 (6).jpg',
        'Makilaaz0 (6).webp',
        'Makilaaz0 (7).jfif',
        'makilaaz0 (7).jpg',
        'Makilaaz0 (7).png',
        'makilaaz0 (7).webp',
        'makilaaz0 (8).jpg',
        'Makilaaz0 (13).jfif',
        'Makilaaz0 (8).png',
        'Makilaaz0 (9).jfif',
        'makilaaz0 (9).jpg',
        'Makilaaz0 (9).png',
        'Makilaaz0 (10).jfif',
        'makilaaz0 (10).jpg',
        'Makilaaz0 (11).jfif',
        'Makilaaz0 (11).jpg',
        'Makilaaz0 (11).png',
        'Makilaaz0 (12).jfif',
        'Makilaaz0 (16).png',
        'Makilaaz0 💕💗.jfif',
        'Makilaaz0 🔥 (1).jfif',
        'Makilaaz0 (19).png',
        'Makilaaz0 🔥 (3).jfif',
        'Makilaaz0 🔥.jfif',
        'Makilaaz0 (12).png',
        'makilaaz0 🥷🏾.jfif',
        'Makilaaz0 (6).png',
        'makilaaz0 🩸.jfif',
        'Makilaaz0 (17).png',
        'Makilaaz0 🩸🩸.jfif',
        'Makilaaz0.jpg',
        'Makilaaz0.png',
        'Makilaaz0.webp',
        'Makilaaz0 (14).png',
        'makilaaz0❤.jfif',
        'makilaaz0🤴🏾🌍.jfif',
        'assets_task_01k176t61xea1ttrbzcz47anh3_1753662539_img_0.webp',
        'Makilaaz0 (20).png'
    ];
    const preview = document.getElementById('preview');
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.style.width = "500px";
        const userAgent = window.navigator.userAgent;
        if (window.innerWidth <= 1562) {
            img.style.width = "32vw";
        }
        if (/iPhone|iPad|iPod|Android/i.test(userAgent) && window.innerWidth <= 750) {
            img.style.width = "47vw";
        }
        preview.appendChild(img);
    });
});
