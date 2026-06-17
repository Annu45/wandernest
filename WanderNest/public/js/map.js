document.addEventListener("DOMContentLoaded", function () {
    try {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
            console.warn("Map container not found");
            return;
        }

        // Check if map is already initialized
        if (mapContainer._leaflet_id) {
            console.warn("Map already initialized");
            return;
        }

        // Get coordinates with fallback
        let coords = listing && listing.geometry && listing.geometry.coordinates 
            ? listing.geometry.coordinates 
            : [-122.4194, 37.7749]; // Default: San Francisco
        
        let [lng, lat] = coords;
        
        // Ensure coordinates are valid
        if (!isFinite(lat) || !isFinite(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
            console.warn("Invalid coordinates, using default");
            lng = -122.4194;
            lat = 37.7749;
        }

        // Initialize map with proper options
        const map = L.map('map', {
            zoomControl: true,
            attributionControl: true
        }).setView([lat, lng], 12);

        // Add OpenStreetMap tiles (free and no CORS issues)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            minZoom: 1
        }).addTo(map);

        // Custom red marker SVG (embedded)
        const redIcon = L.icon({
            iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDMyIDQwIj48cGF0aCBmaWxsPSIjRUY0NDQ0IiBkPSJNMTYgMEM4LjggMCAzIDUuOCAzIDE2YzAgOSAxMyAyNCAxMyAyNHMxMy0xNSAxMy0yNGMwLTEwLjItNS44LTE2LTEzLTE2eiIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjYiIGZpbGw9IiNmZmYiLz48L3N2Zz4=',
            iconSize: [32, 40],
            iconAnchor: [16, 40],
            popupAnchor: [0, -40]
        });

        // Add marker
        const marker = L.marker([lat, lng], { icon: redIcon }).addTo(map);

        // Add popup with styling
        const popupContent = `
            <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 8px;">
                <div style="font-weight: 700; font-size: 14px; color: #1E1B4B; margin-bottom: 4px;">
                    📍 ${listing.title || 'Location'}
                </div>
                <div style="font-size: 12px; color: #6B7280;">
                    ${listing.location || ''}, ${listing.country || ''}
                </div>
                <div style="font-size: 11px; color: #9CA3AF; margin-top: 4px;">
                    ₹${listing.price?.toLocaleString('en-IN') || 'N/A'}/night
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, { 
            className: 'listing-popup',
            maxWidth: 200
        });
        marker.openPopup();

        // Handle window resize
        function resizeMap() {
            setTimeout(() => {
                if (map) map.invalidateSize();
            }, 250);
        }
        
        window.addEventListener('resize', resizeMap);
        console.log("Map initialized successfully at", lat, lng);
        
    } catch (error) {
        console.error('Error initializing map:', error);
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
            mapContainer.innerHTML = '<div style="text-align: center; padding: 40px; color: #999; background: #f5f5f5; border-radius: 12px;"><p>📍 Map could not load</p></div>';
        }
    }
});


 