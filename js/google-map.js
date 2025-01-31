function init() {
  // Coordenadas iniciais (exemplo: Cuiabá, MT)
  var myLatlng = [-15.60141, -56.097891];

  // Criando o mapa dentro da div #map
  var map = L.map("map").setView(myLatlng, 13);

  // Adicionando os tiles do OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // Adicionando marcador ao mapa
  L.marker(myLatlng).addTo(map).bindPopup("Minha Localização").openPopup();
}

// Chama a função init ao carregar a página
window.onload = init;
