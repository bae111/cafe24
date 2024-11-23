$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
            $('#top-btn').addClass('show');
        }else{
            $('#header').removeClass('fix');
            $('#top-btn').removeClass('show');
        }
    });

    // refurbishPer의 텍스트에서 % 문자만 추출하여 span 태그에 담기

    const refurbishPer = document.querySelectorAll('#refurbish .salePer');

    refurbishPer.forEach(element => {
        const percentageText = element.textContent; // 텍스트 내용 가져오기
        const percentageValue = parseFloat(percentageText); // 텍스트를 부동 소수점 숫자로 변환

        if (!isNaN(percentageValue)) { // 변환이 성공했는지 확인
            const percentSpan = document.createElement('span'); // 새로운 span 요소 생성
            percentSpan.textContent = '%'; // span 요소에 % 문자 추가

            // 기존 텍스트 노드를 대체하기 위해 span 요소로 교체
            element.innerHTML = ''; // 기존 텍스트 삭제
            element.appendChild(document.createTextNode(percentageValue)); // 숫자 텍스트 추가
            element.appendChild(percentSpan); // % 문자 span 추가
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

var middle_swiper = new Swiper(".middle-banner-swiper", {
    //  autoplay: {
    //      delay: 3000
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true
});

var new_swiper = new Swiper(".new-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

