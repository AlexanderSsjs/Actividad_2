document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        if (email.trim() === '') {
            alert('Por favor, ingresa un correo válido.');
            return;
        }

        alert(`¡Gracias por suscribirte! Te enviaremos nuestras ofertas a ${email}.`);
        form.reset();
    });

    document.querySelector('.cta').addEventListener('click', () => {
        window.scrollTo({
            top: document.querySelector('.categories').offsetTop - 50,
            behavior: 'smooth'
        });
    });
});
