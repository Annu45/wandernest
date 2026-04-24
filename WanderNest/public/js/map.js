document.addEventListener("DOMContentLoaded", function () {
  if (!listing.geometry || !listing.geometry.coordinates) {
    document.getElementById('map').innerHTML = '<p style="padding:1rem;color:#6B7280;">Map not available for this listing.</p>';
    return;
  }

  const [lng, lat] = listing.geometry.coordinates;

  const map = L.map('map').setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const icon = L.divIcon({
    className: '',
    html: `<div style="
      background:#7C3AED;
      width:18px;height:18px;
      border-radius:50% 50% 50% 0;
      transform:rotate(-45deg);
      border:3px solid white;
      box-shadow:0 2px 8px rgba(124,58,237,0.4);
    "></div>`,
    iconSize: [18, 18],
    iconAnchor: [9, 18],
    popupAnchor: [0, -20],
  });

  L.marker([lat, lng], { icon })
    .addTo(map)
    .bindPopup(`
      <div style="font-family:'Plus Jakarta Sans',sans-serif;padding:4px 2px;">
        <strong style="color:#7C3AED;">${listing.title}</strong><br>
        <span style="font-size:0.8rem;color:#6B7280;">${listing.location}, ${listing.country}</span><br>
        <span style="font-size:0.75rem;color:#9CA3AF;margin-top:4px;display:block;">Exact location shared after booking</span>
      </div>
    `)
    .openPopup();
});
