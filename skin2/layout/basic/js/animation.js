AOS.init();

gsap.registerPlugin(ScrollTrigger);

gsap.set(".at", {
    opacity: 0,
    x: -200 
});

const sections = [
    ".best-swiper",
    ".new-section",
    ".sns-section"
];

sections.forEach(section => {
    gsap.to(`${section} .at`, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: section,
            start: "left center",
            end: "center",
            markers: false 
        } 
    });
});

gsap.set(".best-swiper .swiper-wrapper", {
    opacity: 0,
    y: -200 
});

gsap.to(".best-swiper .swiper-wrapper", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".best-swiper",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

const newSectionElements = [
    ".new-swiper",
    ".swiper-button-next",
    ".swiper-button-prev"
];

newSectionElements.forEach(element => {
    gsap.set(element, {
        opacity: 0,
        y: -200
    });

    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: ".new-section",
            start: "top center",
            end: "center",
            markers: false
        }
    });
});

gsap.set(".sns-section .sns-list li", {
    opacity: 0,
    scale: 1.4
});

gsap.to(".sns-section .sns-list li", {
    duration: 0.8,
    opacity: 1,
    scale: 1,
    transformOrigin: "top right",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".sns-section",
        start: "top center",
        end: "center",
        markers: false 
    } 
});

const waveText = document.querySelector('.sns-section .inid');
waveText.innerHTML = waveText.textContent.split('').map(char => `<span>${char}</span>`).join('');

const textSpans = document.querySelectorAll('.sns-section .inid span');

// GSAP + ScrollTrigger를 사용한 애니메이션 설정
gsap.to(textSpans, {
    scrollTrigger: {
        trigger: waveText, // 트리거로 사용할 요소
        start: "top 80%", // 트리거 시작 위치 (화면 상단에서 80%)
        end: "bottom 20%", // 트리거 종료 위치
        toggleActions: "play none none reset", // 스크롤 시 애니메이션 제어
    },
    duration: 0.6,
    opacity: 1, // 글자가 보이게 설정
    ease: "power1.inOut", // 애니메이션 가속 곡선
    stagger: {
        amount: 1, // 애니메이션 전체 시간
        from: "start", // 시작 위치
        onStart: function() {
            const startColor = 0; // 시작 색상 값
            const endColor = 360; // 종료 색상 값
            // 각 글자에 대한 색상 설정
            textSpans.forEach((span, i) => {
                // 색상 값과 지연 시간 조정
                const hue = (startColor + ((i % 10) * 30) + (i * 2)) % endColor; // HSL 색상 조정
                gsap.to(span, {
                    color: '#fff',
                    duration: 1, // 각 글자 색상 애니메이션 시간
                    delay: (i * 0.1) + Math.abs(Math.sin(i * 0.5)) * 0.1, // 각 글자에 대해 시간차를 줘서 상하 물결 효과
                });
            });
        },
    },
});