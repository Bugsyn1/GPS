let swiper = Swiper;
let init = false;
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)');
let tablet = window.matchMedia('(min-width: 768px) and (max-width: 1119px)');
let desktop = window.matchMedia('(min-width: 1120px)');
function swiperMode() {
   
    if(mobile.matches) {
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
    }
    else if(tablet.matches) {
        swiper.destroy();
        init = false;
    }
    else if(desktop.matches) {
        swiper.destroy();
        init = false;
    }
}

window.addEventListener('load', function() {
    swiperMode();
});


window.addEventListener('resize', function() {
    swiperMode();
}); 


let btn = document.querySelector('.show-all');
let swiperWrapper = document.querySelector('.swiper-wrapper')
let open = function () {
    swiperWrapper.classList.toggle('swiper-open');
    swiperWrapper.classList.toggle('wrapper-hide');
    if(btn.innerHTML == 'Скрыть'){
        btn.innerHTML = 'Показать все';
    }
    else {
btn.innerHTML = 'Скрыть'

    }
}
btn.addEventListener('click', open)
