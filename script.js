// ===============================================
// NAVBAR: mostrar solo la sección seleccionada
// ===============================================

document.addEventListener('DOMContentLoaded', () => {

    // Todos los links del navbar (y cualquier otro elemento
    // que use data-section, como el botón "Ver Portafolio" del Hero)
    const enlaces = document.querySelectorAll('[data-section]');

    // Todas las secciones de la página
    const secciones = document.querySelectorAll('.seccion');

    // Función que muestra únicamente la sección solicitada
    function mostrarSeccion(idSeccion) {

        secciones.forEach(seccion => {

            if (seccion.id === idSeccion) {
                seccion.classList.remove('oculto');
            } else {
                seccion.classList.add('oculto');
            }

        });

        // Actualiza la clase "activo" solo en los links del menú principal
        document.querySelectorAll('.menu a').forEach(link => {

            if (link.dataset.section === idSeccion) {
                link.classList.add('activo');
            } else {
                link.classList.remove('activo');
            }

        });

        // Sube el scroll al top cada vez que se cambia de sección
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Click en cualquier elemento con data-section (navbar, botones internos, etc.)
    enlaces.forEach(enlace => {

        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const destino = enlace.dataset.section;
            mostrarSeccion(destino);
        });

    });

    // Al cargar la página, solo se muestra el Hero (Inicio)
    mostrarSeccion('hero');

});