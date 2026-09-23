// ==========================================
// ABRIR PANTALLAS
// ==========================================

function abrirPantalla(nombre) {

    const pantalla = document.getElementById("pantalla-" + nombre);

    if (!pantalla) {
        console.log("No se encontró: pantalla-" + nombre);
        return;
    }

    pantalla.classList.add("activa");
}


// ==========================================
// CERRAR PANTALLAS
// ==========================================

function cerrarPantalla() {

    const pantallas = document.querySelectorAll(".pantalla-interna");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    const videos = document.querySelectorAll(".pantalla-interna video");

    videos.forEach(function(video) {
        video.pause();
        video.currentTime = 0;
    });

}


// ==========================================
// REPRODUCTOR DE MUSICA
// ==========================================

const audio = new Audio("../MUSICA/Close to you.mp3");

const playBtn = document.getElementById("playBtn");
const volumen = document.getElementById("volumen");

audio.volume = 1;

volumen.addEventListener("input", function() {
    audio.volume = this.value / 100;
});


// ==========================================
// INICIAR MUSICA CON LA PRIMERA INTERACCION
// ==========================================

let musicaIniciada = false;

document.addEventListener("click", function() {

    if (musicaIniciada) {
        return;
    }

    musicaIniciada = true;

    audio.play()
        .then(function() {

            playBtn.textContent = "❚❚";

        })
        .catch(function(error) {

            console.log("No se pudo iniciar la música:", error);

            musicaIniciada = false;

        });

});


// ==========================================
// BOTON PLAY / PAUSA
// ==========================================

playBtn.addEventListener("click", function(event) {

    event.stopPropagation();

    if (audio.paused) {

        audio.play();

        playBtn.textContent = "❚❚";

        musicaIniciada = true;

    } else {

        audio.pause();

        playBtn.textContent = "▶";

    }

});


// ==========================================
// CUANDO TERMINA LA CANCION
// ==========================================

audio.addEventListener("ended", function() {

    playBtn.textContent = "▶";

    musicaIniciada = false;

});


// ==========================================
// TECLA ESC
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        cerrarPantalla();
    }

});