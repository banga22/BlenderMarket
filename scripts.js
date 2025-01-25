document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Спасибо за ваше сообщение, ${name}! Мы свяжемся с вами по адресу ${email}.`);
    });
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function goToSlide(index) {
  if (index &lt; 0) {
    index = carouselItems.length - 1;
  } else if (index &gt;= carouselItems.length) {
    index = 0;
  }
  currentIndex = index;
  document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}
 
function goToNextSlide() {
  goToSlide(currentIndex + 1);
}
 
function goToPrevSlide() {
  goToSlide(currentIndex - 1);
}
 
setInterval(goToNextSlide, 3000);
