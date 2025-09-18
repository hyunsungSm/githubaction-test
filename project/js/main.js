const spyEls = document.querySelectorAll('.scroll-spy');

// init controller
const controller = new ScrollMagic.Controller();

spyEls.forEach(function (spyEl) {
  // create a scene
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(controller); // 컨트롤러에 장면을 할당(필수!)
});

// 현재 년도
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

const toTopEl = document.querySelector('#toTop');
const visualSpanEls = document.querySelectorAll('span');

// 페이지 최상단으로 이동
window.addEventListener('scroll', function () {
  if (window.scrollY > 500){
    toTopEl.style.opacity = '1';
    toTopEl.style.transform = 'translateX(0)';
  } else {
    toTopEl.style.opacity = '0';
    toTopEl.style.transform = 'translateX(100px)';
  } 
});

// 프로젝트 뒤집기
const flip = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');

flipCardInner.addEventListener('click', function () {
  flip.classList.toggle('active');

  if (flip.classList.contains('active')){
    flipCardInner.style.transform = 'rotateY(180deg)';
  } else if (!(flip.classList.contains('active'))){
    flipCardInner.style.transform = 'rotateY(0)';
  }
})
