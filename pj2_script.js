document.addEventListener("DOMContentLoaded", () => {
  const imageContainers = document.querySelectorAll(".image-container");

  function revealContainers() {
    const windowWidth = window.innerWidth; // 화면 가로 길이
    const windowHeight = window.innerHeight;

    imageContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
      const image = container.querySelector(".scroll-image");

      // 패딩 값을 동적으로 가져오기
      const computedStyle = getComputedStyle(container);
      const padding = parseInt(computedStyle.padding) || 0;

      // 스크롤 범위 안에 들어왔는지 확인
      if (containerTop < windowHeight && !container.classList.contains("visible")) {
        const aspectRatio = image.naturalHeight / image.naturalWidth; // 이미지 비율 계산
        const margin = 220 * 2; // 양옆의 마진 (...px씩 두 측면)

        const maxAvailableWidth = windowWidth - margin; // 마진을 제외한 가로 길이
        const calculatedHeight = maxAvailableWidth * aspectRatio; // 비율에 따른 세로 길이 계산

        container.style.width = `${maxAvailableWidth}px`; // 컨테이너 가로 크기 설정
        container.style.height = `${calculatedHeight}px`; // 컨테이너 세로 크기 설정

        // 이미지 크기를 패딩 내에서 맞춤
        image.style.width = `calc(100% - ${padding * 2}px)`;
        image.style.height = `calc(100% - ${padding * 2}px)`;

        container.classList.add("visible");
      }
    });
  }

  // 초기 상태 설정
  imageContainers.forEach(container => {
    container.style.width = "0"; // 초기 가로 길이
    container.style.height = "0"; // 초기 세로 길이
  });

  // 스크롤 이벤트 발생 시 컨테이너 확인
  window.addEventListener("scroll", revealContainers);

  // 초기 실행
  revealContainers();
});
