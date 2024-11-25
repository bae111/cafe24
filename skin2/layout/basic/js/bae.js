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

    $('#type').change(function() {
        // 현재 스크롤 위치를 sessionStorage에 저장
        sessionStorage.setItem('scrollPosition', $(window).scrollTop());

        // 선택한 페이지로 이동
        location.href = $(this).val();
    });

    // 페이지가 로드되었을 때 스크롤 위치 복원
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        // 페이지 로딩 후 스크롤 위치가 저장되어 있으면 해당 위치로 이동
        $(window).on('load', function() {
            $(window).scrollTop(scrollPosition);
            // 스크롤 위치 복원 후 sessionStorage에서 해당 값을 제거
            sessionStorage.removeItem('scrollPosition');
        });
    }
    
    // 기존 정렬 방법 처리
    var sSortName = CAPP_SHOP_FRONT_COMMON_UTIL.getParameterByName('sort_method');

    if (sSortName !== '') {

        if (sSortName.indexOf('#Product_ListMenu') < 0) {
            sSortName = sSortName + '#Product_ListMenu';
        }

        $('#type>option').each(function() {
            if ($(this).val().indexOf(sSortName) > 0) {
                $(this).prop('selected', true);
            }
        });
    }

    // 전체 체크박스 클릭 시 모든 개별 체크박스 상태 업데이트
    $('th input[type="checkbox"]').change(function() {
        const isChecked = $(this).prop('checked');
        // 모든 개별 체크박스 상태 업데이트
        $('[id^="basket_chk_id_"]').prop('checked', isChecked);
    });

    // 개별 체크박스 클릭 시 전체 체크박스 상태 업데이트
    $('[id^="basket_chk_id_"]').change(function() {
        const allChecked = $('[id^="basket_chk_id_"]:checked').length === $('[id^="basket_chk_id_"]').length;
        // 전체 체크박스 상태 업데이트
        $('th input[type="checkbox"]').prop('checked', allChecked);
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

