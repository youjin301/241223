document.addEventListener('DOMContentLoaded', () => {
  const image1 = document.querySelector('.image1');
  const image2 = document.querySelector('.image2');

  // image1 호버 시 회전 및 이미지 변경
  image1.addEventListener('mouseover', () => {
    image1.classList.toggle('active'); // active 클래스 토글
    if (image1.classList.contains('active')) {
      image1.querySelector('.image').style.backgroundImage = "url('img/card3_img-21.jpg')";
    } else {
      image1.querySelector('.image').style.backgroundImage = ""; // 기본 이미지로 되돌림
    }
  });

  // image2 호버 시 회전 및 이미지 변경
  image2.addEventListener('mouseover', () => {
    image2.classList.toggle('active'); // active 클래스 토글
    if (image2.classList.contains('active')) {
      image2.querySelector('.image').style.backgroundImage = "url('img/card3_img-22.jpg')";
    } else {
      image2.querySelector('.image').style.backgroundImage = ""; // 기본 이미지로 되돌림
    }
  });

  // 모든 이미지에 호버 이벤트 추가
  const images = document.querySelectorAll('.image');
  images.forEach((image) => {
    image.addEventListener('mouseover', () => {
      const allActive = Array.from(images).every((img) => img.classList.contains('active'));

      // 모든 이미지의 active 상태를 토글
      images.forEach((img) => {
        if (allActive) {
          img.classList.remove('active'); // 모두 비활성화
        } else {
          img.classList.add('active'); // 모두 활성화
        }
      });
    });
  });
});
