document.addEventListener("DOMContentLoaded", () => {

    const mapaDiv = document.getElementById("mapa");

    if (!mapaDiv) return;

    const mapa = L.map("mapa")
        .setView([-25.6574, -49.3078], 12);

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }
    ).addTo(mapa);

    CELULAS.forEach(celula => {

        if (celula.ativa !== true) {
            return;
        }

        const icone = L.divIcon({
            className: celula.igreja ? "map-marker map-marker-igreja" : "map-marker map-marker-celula",
            html: `<span>${celula.igreja ? "⛪" : "🏠"}</span>`,
            iconSize: [38, 38],
            iconAnchor: [19, 38],
            popupAnchor: [0, -38]
        });

        const enderecoHtml = celula.mostrar_endereco
            ? `<p>📌 ${celula.endereco}</p>`
            : '';
        const nomeCelula = celula.nome || celula.bairro;

        const popup = `
            <div class="popup-celula">

                <h3>${nomeCelula}</h3>

                <p class="popup-lider">
                    Líder: ${celula.lider}
                </p>

                <p>
                    📍 ${celula.bairro}
                </p>
                
                ${enderecoHtml}
                
                <p>
                    🗓️ ${celula.dia}
                </p>

                <p>
                    ⏰ ${celula.horario}
                </p>

                <p>
                    ${celula.observacao || ""}
                </p>

                <a
                    href="https://wa.me/${celula.whatsapp.replace(/[^0-9]/g, '')}"
                    target="_blank"
                    class="btn-whatsapp">
                    📱 Falar com o líder
                </a>

            </div>
        `;

        L.marker([
            celula.latitude,
            celula.longitude
        ], { icon: icone })
            .addTo(mapa)
            .bindPopup(popup);

    });

});
