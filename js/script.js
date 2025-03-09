"use strict"

function ibg(){

   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }
   }
   }
   
   ibg();

document.addEventListener("DOMContentLoaded", function () {
      const burger = document.getElementById("burger");
      const menu = document.getElementById("menu");
  
      burger.addEventListener("click", function () {
          this.classList.toggle("active");
          menu.classList.toggle("active");
      });
  });
  

// ++++++++++++slider++++++++++++++

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider__item");
    const sliderWrapper = document.querySelector(".slider__body");
    const dotsContainer = document.querySelector(".dots");

    let currentIndex = 0;
    let startX = 0; // Начальная позиция пальца
    let endX = 0; // Конечная позиция пальца

    // Создаем точки
    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active"); // Первая точка активна
        dotsContainer.appendChild(dot);

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Обновляем активную точку
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    // ✅ Добавляем поддержку свайпа
    sliderWrapper.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX; // Запоминаем начальную позицию пальца
    });

    sliderWrapper.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX; // Запоминаем текущее положение пальца
    });

    sliderWrapper.addEventListener("touchend", () => {
        let diff = startX - endX;

        if (diff > 50) { 
            // Свайп влево → следующий слайд
            currentIndex = (currentIndex + 1) % slides.length;
        } else if (diff < -50) {
            // Свайп вправо → предыдущий слайд
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }

        updateSlider();
    });
});