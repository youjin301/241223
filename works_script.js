document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const container = document.querySelector('.container');
    const inactiveSectionWidth = 50; // 비활성 섹션의 고정 크기(px)
  
    function updateSectionSizes(activeIndex) {
      const totalWidth = window.innerWidth; // 전체 화면 크기
      const activeSectionWidth = totalWidth - (sections.length - 1) * inactiveSectionWidth; // 활성 섹션 크기 계산
  
      sections.forEach((section, index) => {
        if (index === activeIndex) {
          section.style.flex = `0 0 ${activeSectionWidth}px`; // 활성 섹션
        } else {
          section.style.flex = `0 0 ${inactiveSectionWidth}px`; // 비활성 섹션
        }
      });
    }
  
    sections.forEach((section, index) => {
      section.addEventListener('click', () => {
        // 활성 섹션 크기 업데이트
        updateSectionSizes(index);
  
        // 모든 섹션에서 active 클래스 제거
        sections.forEach((sec) => sec.classList.remove('active'));
  
        // 클릭한 섹션에 active 클래스 추가
        section.classList.add('active');
      });
    });
  
    // 초기 상태: 첫 번째 섹션 활성화
    updateSectionSizes(0);
    sections[0].classList.add('active');
  
    // 윈도우 크기 변경 시 크기 재계산
    window.addEventListener('resize', () => {
      const activeIndex = [...sections].findIndex((section) =>
        section.classList.contains('active')
      );
      updateSectionSizes(activeIndex);
    });
  });
  
// ---- 추가 ---- 
document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector("#section2 .slider-wrapper");
    const images = document.querySelectorAll("#section2 .slider-image");
    const upArrow = document.querySelector("#section2 .left-arrow");
    const downArrow = document.querySelector("#section2 .right-arrow");
  
    let currentIndex = 0; // 현재 슬라이더 인덱스
  
    function updateSliderPosition() {
      const imageHeight = images[0].clientHeight; // 각 이미지의 높이 계산
      sliderWrapper.style.transform = `translateY(-${currentIndex * imageHeight}px)`; // 슬라이더 이동
    }
  
    // 위쪽 화살표 클릭 이벤트
    upArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateSliderPosition();
      }
    });
  
    // 아래쪽 화살표 클릭 이벤트
    downArrow.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
        currentIndex += 1;
        updateSliderPosition();
      }
    });
  
    // 반응형: 윈도우 크기 변경 시 슬라이더 위치 재조정
    window.addEventListener("resize", updateSliderPosition);
  });
  
  

  