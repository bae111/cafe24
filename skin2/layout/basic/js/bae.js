$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');

        }else{
            $('#header').removeClass('fix');

        }
    });

})

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 모든 탭 버튼과 콘텐츠를 비활성화
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => {
                content.classList.remove('show', 'active');
            });

            // 클릭한 버튼 활성화
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');

            // 해당 콘텐츠 활성화
            const targetId = this.getAttribute('data-bs-target');
            const targetContent = document.querySelector(targetId);
            targetContent.classList.add('show', 'active');
        });
    });
});

var main_banner_swiper = new Swiper(".main-banner-swiper", {
    // autoplay: {
    //     delay: 3000
    // },
    loop: true
});


var best_swiper = new Swiper(".best-swiper", {
    slidesPerView: 4,
    spaceBetween: 40,
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    loop: true
});


var new_swiper = new Swiper(".new-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

var middle_swiper = new Swiper(".middle-banner-swiper", {
        // autoplay: {
    //     delay: 3000
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

