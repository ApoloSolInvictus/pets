// Espera a que todo el contenido HTML se cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {

    // --- Lógica del Popup de Video ---

    // 1. Encontrar los botones y el popup en el HTML
    const openButton = document.getElementById('open-video-btn');
    const closeButton = document.getElementById('close-video-btn');
    const videoPopup = document.getElementById('video-popup-overlay');
    const videoFrame = document.getElementById('youtube-video');
    
    // Guardamos la URL original del video
    const videoSrc = videoFrame.src;

    // 2. Función para ABRIR el popup
    function openPopup() {
        if (videoPopup) {
            videoPopup.style.display = 'flex'; // Lo mostramos
            videoFrame.src = videoSrc; // Nos aseguramos que el video cargue (y suene)
        }
    }

    // 3. Función para CERRAR el popup
    function closePopup() {
        if (videoPopup) {
            videoPopup.style.display = 'none'; // Lo ocultamos
            // Detenemos el video para que no siga sonando
            videoFrame.src = ''; 
            // Restauramos la URL para la próxima vez que se abra
            videoFrame.src = videoSrc; 
        }
    }

    // 4. Asignar las funciones a los botones
    
    // Si el botón "Ver Video" existe en esta página...
    if (openButton) {
        openButton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que la página salte al #
            openPopup();
        });
    }

    // Si el botón "Cerrar" (la X) existe...
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closePopup();
        });
    }

    // Opcional: Cerrar el popup si se hace clic en el fondo oscuro
    if (videoPopup) {
        videoPopup.addEventListener('click', function(event) {
            // Si el clic fue en el fondo (overlay) y no en el contenido (caja de video)
            if (event.target === videoPopup) {
                closePopup();
            }
        });
    }

});