document.addEventListener("DOMContentLoaded", () => {
    const unfoldLetters = document.querySelectorAll("#unfold .letter");
    const storiesLetters = document.querySelectorAll("#stories .letter");
    const storiesContainer = document.getElementById("stories");
    const cycleDuration = 10000; // 전체 주기 (10초 애니메이션)
  
    function resetAnimations(letters) {
      // 애니메이션 초기화
      letters.forEach(letter => {
        letter.style.animation = "none"; // 애니메이션 제거
        letter.offsetHeight; // DOM 리플로우 강제
        letter.style.animation = ""; // 애니메이션 재적용 준비
      });
    }
  
    function animateText(letters, delayStart = 0) {
      resetAnimations(letters); // 애니메이션 초기화
  
      // 글자 순차적으로 등장
      letters.forEach((letter, index) => {
        letter.style.animation = `slideUp 1s ease forwards`;
        letter.style.animationDelay = `${delayStart + index * 0.2}s`;
      });
  
      // 모든 글자가 동일한 시점에 사라지도록 설정
      setTimeout(() => {
        letters.forEach(letter => {
          letter.style.animation = `slideDown 1s ease forwards`;
        });
      }, delayStart * 1000 + 4000); // 4초 대기 후 모든 글자가 동시에 사라짐
    }
  
    function startAnimationCycle() {
      // UNFOLD 애니메이션 실행
      animateText(unfoldLetters);
  
      // "The Stories Behind Design" 애니메이션 실행
      setTimeout(() => {
        storiesContainer.style.visibility = "visible"; // 보이도록 설정
        animateText(storiesLetters, 1); // 등장 텀 1초 추가
      }, 4000); // UNFOLD 글자 사라진 후 실행
  
      // "The Stories Behind Design" 숨기기
      setTimeout(() => {
        storiesContainer.style.visibility = "hidden"; // 숨김 처리
        resetAnimations(storiesLetters); // 애니메이션 초기화
      }, 10000); // The Stories Behind Design 사라지는 시간
    }
  
    startAnimationCycle(); // 초기 실행
    setInterval(startAnimationCycle, cycleDuration); // 무한 반복
  });
  