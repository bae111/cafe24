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
        // 선택한 페이지로 이동
        location.href = $(this).val();
    });
    
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

var order_best_swiper = new Swiper(".order-best-swiper", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true
});

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

    const productItems = document.querySelectorAll('.xans-product .xans-product-listitem.spec');

    productItems.forEach(function(item) {
        // 각 상품의 원래 가격과 할인된 가격을 가져옵니다
        const originalPriceElement = item.querySelector('.xans-product .xans-product-listitem.spec li:nth-child(2) > span');
        const discountedPriceElement = item.querySelector('.xans-product .xans-product-listitem.spec li:nth-child(3) > span');
        
        // 텍스트로 입력된 가격을 숫자 형태로 변환합니다
        const originalPrice = parseInt(originalPriceElement.textContent.replace('₩', '').replace(',', ''), 10); // 원래 가격
        const discountedPrice = parseInt(discountedPriceElement.textContent.replace('₩', '').replace(',', ''), 10); // 할인된 가격

        // 할인율 계산
        if (originalPrice > discountedPrice) {
            const discountRate = ((originalPrice - discountedPrice) / originalPrice) * 100;

            // 할인율을 소수점 한 자리까지 계산하고 표시
            const discountRateElement = item.querySelector('.discount-rate');
            discountRateElement.textContent = `${discountRate.toFixed(0)}%`;
        }
    });
});