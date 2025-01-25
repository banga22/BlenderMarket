document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Спасибо за ваше сообщение, ${name}! Мы свяжемся с вами по адресу ${email}.`);
    });
});
