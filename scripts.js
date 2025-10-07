const hamburguesa = document.getElementById('hamburguesa');
const btn = document.getElementById("whatsapp-button");
const list = document.getElementById("whatsapp-list");

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

btn.addEventListener("click", () => {
    list.classList.toggle("active");
});

// Cierra el menú si clickeás fuera
document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !list.contains(e.target)) {
        list.classList.remove("active");
    }
});

