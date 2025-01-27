import { useRef, useEffect } from 'react';
import mapboxgl, { Map } from 'mapbox-gl';
import "../../styles/index.css";
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage: React.FC = () => {
  // Configurar el accessToken de Mapbox
  mapboxgl.accessToken = "pk.eyJ1IjoidmluaXhpb3MiLCJhIjoiY200cHoybHcxMTI3MDJxcHpicjF4bDZlMSJ9.N_3DDliM43rDxwRQS374dQ";

  const mapContainer = useRef(null);

  useEffect(() => {
    // Inicializar el mapa
    const map = new mapboxgl.Map({
      container: mapContainer.current,  // Referencia al contenedor del mapa
      style: "mapbox://styles/mapbox/streets-v11",  // Usar el estilo adecuado que incluye los edificios 3D
      center: [-80.2576632, 25.8941342],  // Coordenadas de Glorieta Gardens Apartments
      zoom: 17,  // Nivel de zoom para estar más cerca de la ubicación
      pitch: 70,  // Ángulo del mapa para una vista 3D
      bearing: 0,  // Ángulo de rotación del mapa
    });
    const geojson = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [-80.2576632, 25.8941342], // Coordenadas del edificio
                [-80.2578000, 25.8942000],
                [-80.2577000, 25.8942500],
                [-80.2576500, 25.8941500],
              ]
            ]
          },
          "properties": {
            "height": 20,  // Altura personalizada
            "color": "#FF0000"  // Color personalizado
          }
        }
      ]
    };
    
    

  // Agregar un marcador en la ubicación
  new mapboxgl.Marker()
  .setLngLat([-80.2576632, 25.8941342])
  .addTo(map);
  // Agregar controles de navegación (zoom y rotación)
  map.addControl(new mapboxgl.NavigationControl(), 'top-right');  // Zoom y rotación
  map.addControl(new mapboxgl.FullscreenControl(), 'top-left');  // Control de pantalla completa

    map.on("load", () => {
      // Activar la capa de edificios 3D (fill-extrusion)
      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
     
        type: 'fill-extrusion',
        minzoom: 14,
        paint: {
          'fill-extrusion-color': 'gray',  // Color del edificio
    'fill-extrusion-height': ['get', 'height'],  // Altura de los edificios
    'fill-extrusion-base': ['get', 'min_height'],  // Base de los edificios (si existe)
    'fill-extrusion-opacity': 0.9,  // Opacidad del edificio
    'fill-extrusion-outline-color': '#000',  // Color del borde del edificio
    'fill-extrusion-outline-width': 2,  // Grosor del borde
        }
      
      });
     
      map.addLayer({
        id: 'custom-buildings',
        type: 'fill-extrusion',
        source: {
          type: 'geojson',
          data: geojson,  // Fuente de datos GeoJSON
        },
        paint: {
          'fill-extrusion-color': ['get', 'color'],
          'fill-extrusion-height': ['get', 'height'],
        },
      });

      // Para asegurarte de que la capa de edificios se dibuje sobre otras capas, puedes cambiar el orden
      map.moveLayer("building", "water");  // Asegura que los edificios estén por encima del agua (puedes ajustar esto si es necesario)
    });

    return () => {
      map.remove();  // Limpiar la instancia del mapa cuando el componente se desmonta
    };
  }, []);

  return (
    <div
      id="map"
      ref={mapContainer}
      style={{ width: "100%", height: "100vh" }}  // Hacer el mapa de tamaño completo
    />
  );
};

export default MapPage;
