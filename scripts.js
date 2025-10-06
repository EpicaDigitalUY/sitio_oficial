const hamburguesa = document.getElementById('hamburguesa');

document.querySelector('.contacto-formulario').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = encodeURIComponent(document.getElementById('nombre').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value);

    const mailtoLink = `mailto:epicadigitaluy@gmail.com?subject=Mensaje de ${nombre}&body=Nombre: ${nombre}%0ACorreo: ${email}%0A%0A${mensaje}`;

    // Abrimos el cliente de correo con el mailto
    window.location.href = mailtoLink;
});

hamburguesa.addEventListener('click', function () {
    const menu = document.querySelector('.menu-hamburguesa');
    menu.classList.toggle('mostrar');
    hamburguesa.classList.toggle('activo');
});