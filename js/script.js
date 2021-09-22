let swiper = Swiper;
let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
let desktop = window.matchMedia('(min-width: 1120px)');

function swiperMode() {

    if (mobile.matches) {
        if (!init) {
            init = true;
            swiper = new Swiper(".mySwiper", {
                slidesPerView: "auto",
                spaceBetween: 10,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },

                autoplay: {
                    delay: 1500,
                    disableOnInteration: true,
                    pauseOnMouseEnter: true,
                },

            });
        }
    } else if (tablet.matches) {
        swiper.destroy();
        init = false;
    } else if (desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function () {
    swiperMode();
});


window.addEventListener('resize', function () {
    swiperMode();
});


let allElem = document.querySelectorAll('.swiper-slide');
if (tablet.matches) {
    for (let i = allElem.length - 1; i >= 6; i--) {
          
    allElem[i].classList.add('hide');

    }


}

let btn = document.querySelector('.show-all');
let swiperSlide = document.querySelectorAll('.hide')
let open = function () {
    for (let i = 0; i < swiperSlide.length; i++) {
        if (swiperSlide[i].classList.contains('hide')) {
            btn.textContent = 'Скрыть';
        } else {
            btn.textContent = 'Показать все';
        }
        swiperSlide[i].classList.toggle('hide');
        btn.classList.toggle('btn-hide');
    }

}
btn.addEventListener('click', open)