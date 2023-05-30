var evenSlide = 'evenSlide';

if (document.querySelector('.' + evenSlide)) {
    var splide = document.getElementsByClassName('evenSlide');
    new Splide(splide[0], {
        autoplay: true,
        perPage: 4, // 4 nesne görüntülenecek
        perMove: 1,
        rewind: false,
        arrows: false,
        pagination: false,
        drag: true,
        direction: "ltr", // Sola doğru kayma
        gap: '2rem', // Nesneler arasında 1rem boşluk bırak
        breakpoints: {
            640: {
                perPage: 2,
            },
            480: {
                perPage: 1,
            },
        },


    }).mount();
}