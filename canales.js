// Guarda información de cada canal que te preste tu amigo.
// Cada bloque (ej: "espn") es como una ficha técnica.

const baseDeDatosCanales = {
    "espn": {
        nombre: "ESPN",
        // Por ahora ponemos un texto de prueba, luego pegaremos el iframe real de tu amigo
        iframe: '<div style="color:white; font-size:24px; text-align:center; padding-top:20%">📡 Conectando con la señal de ESPN...</div>'
    },
    "dsports": {
        nombre: "DSports (Mundial)",
        iframe: '<iframe src="https://sudamericaplay.sbs/canal_8112/cza_dsports.html" width="100%" height="100%" frameborder="0" allowfullscreen allow="autoplay; fullscreen; encrypted-media"></iframe>'
    },
    "america": {
        nombre: "América TV GO",
        iframe: '<div style="color:white; font-size:24px; text-align:center; padding-top:20%">📺 Conectando con América TV...</div>'
    }
};