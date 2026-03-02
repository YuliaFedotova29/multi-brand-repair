const toggleBtn = document.getElementById('brandsToggle');
const hiddenCards = document.querySelectorAll('.brand-card.hidden-row');
const brandsGrid = document.getElementById('brandsGrid');
let isOpen = false;

//Переключение видимости карточек
if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
        isOpen = !isOpen;
        hiddenCards.forEach(card => card.classList.toggle('shown', isOpen));
        brandsGrid.classList.toggle('show-all', isOpen);
        toggleBtn.classList.toggle('open', isOpen);
    });
}

//Наполнение свайпера для мобильных устройств
const swiperWrapper = document.querySelector('.swiper-wrapper');
if (swiperWrapper) {
    swiperWrapper.innerHTML = '';

    document.querySelectorAll('.brands__grid .brand-card:not(.hidden-row)').forEach(card => {
        const clonedCard = card.cloneNode(true);
        clonedCard.classList.remove('hidden-row', 'shown');

        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.appendChild(clonedCard);
        swiperWrapper.appendChild(slide);
    });
}

//Инициализация Swiper
new Swiper('#brandsSwiper', {
    slidesPerView: 'auto', 
    spaceBetween: 16,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});