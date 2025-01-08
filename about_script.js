document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const largeText = document.getElementById('largeText');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const returnIcon = document.getElementById('returnIcon');
  
    // Intersection Observer 설정
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 현재 섹션의 data-large-text 값을 가져와 large-text에 업데이트
          const newText = entry.target.getAttribute('data-large-text');
          
          // 텍스트 변경 전에 기존 텍스트를 부드럽게 사라지게 함
          largeText.classList.remove('active');
          setTimeout(() => {
            largeText.textContent = newText; // 텍스트 업데이트
            largeText.classList.add('active');
          }, 500); // 기존 텍스트 사라지는 시간과 동일

           // 마지막 섹션일 경우 scroll-indicator 즉시 숨기기
          if (entry.target === sections[sections.length - 1]) {
            scrollIndicator.style.display = 'none'; // 바로 숨기기
          } else {
            scrollIndicator.style.display = 'block'; // 다시 보이게 설정
          }
        }
      });
    }, 
    {
      threshold: 0.7 // 70% 화면에 들어올 때 감지
    });
  
    // 각 섹션 관찰 시작
    sections.forEach(section => observer.observe(section));

      // X 아이콘 클릭 시 메인 화면으로 돌아가기
  returnIcon.addEventListener('click', () => {
    sections[0].scrollIntoView({ behavior: 'smooth' });
  });
  });
  
  