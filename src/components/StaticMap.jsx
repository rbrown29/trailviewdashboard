import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import PropTypes from "prop-types";

mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

const StaticMap = ({ data, hoveredPoint }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const popupRef = useRef(null);
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  useEffect(() => {
    if (map.current) return;
    // Calculate the center of the map
    const calculateCenter = () => {
      const totalPoints = data.length;
      const centerLatitude =
        data.reduce((sum, point) => sum + point.latitude, 0) / totalPoints;
      const centerLongitude =
        data.reduce((sum, point) => sum + point.longitude, 0) / totalPoints;

      return [centerLongitude, centerLatitude];
    };
    const center = calculateCenter();
    // Initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: center,
      zoom: isMobile ? 13 : 13.5,
      bearing: 220,
      pitch: 40,
    });

    map.current.on("style.load", () => {
      // Add hillshading and terrain
      map.current.addSource("mapbox-dem", {
        type: "raster-dem",
        url: "mapbox://mapbox.mapbox-terrain-dem-v1",
        tileSize: 512,
        maxzoom: 14,
      });
      map.current.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
      map.current.addLayer({
        id: "hillshading",
        source: "mapbox-dem",
        type: "hillshade",
        paint: {
          "hillshade-exaggeration": 0.5,
        },
      });
      map.current.addLayer({
        id: "water",
        source: "composite",
        "source-layer": "water",
        type: "fill",
        paint: {
          "fill-color": "#000F52",
          "fill-opacity": 0.8,
        },
      });
    });

    // Add trail line
    const coordinates = data.map((point) => [point.longitude, point.latitude]);
    map.current.on("load", () => {
      map.current.addSource("trail", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates,
          },
        },
      });
      map.current.addLayer({
        id: "trail-line",
        type: "line",
        source: "trail",
        paint: {
          "line-color": "#08ff08",
          "line-width": 5,
        },
      });

      // Add a source for the hovered point
      map.current.addSource("hovered-point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [],
        },
      });

      // Add a circle layer for the hovered point
      map.current.addLayer({
        id: "hovered-point-layer",
        type: "circle",
        source: "hovered-point",
        paint: {
          "circle-radius": 8,
          "circle-color": "#08ff08",
          "circle-stroke-width": 2,
          "circle-stroke-color": "#FFFFFF",
        },
      });
    });
  }, [data, isMobile]);
  useEffect(() => {
    if (hoveredPoint && map.current) {
      const hoveredPointData = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [hoveredPoint.longitude, hoveredPoint.latitude],
            },
            properties: {
              altitude: hoveredPoint.altitude,
              distance: hoveredPoint.distance,
            },
          },
        ],
      };

      // Update the hovered point source with new data
      const source = map.current.getSource("hovered-point");
      if (source) {
        source.setData(hoveredPointData);
      }

      // Clear the old popup
      if (popupRef.current) {
        popupRef.current.remove();
      }

      // Add a new popup for the hovered point
      popupRef.current = new mapboxgl.Popup()
        .setLngLat([hoveredPoint.longitude, hoveredPoint.latitude])
        .setHTML(
          `<div style="background: #080808; color: #08ff08; padding: 10px; border-radius: 8px;">
              <div><strong>Altitude:</strong> ${(
                hoveredPoint.altitude / 3.28084
              ).toFixed(2)} ft</div>
              <div><strong>Distance:</strong> ${(
                hoveredPoint.distance / 1609.34
              ).toFixed(2)} miles</div>
            </div>`
        )
        .addTo(map.current);
    }
  }, [hoveredPoint]);

  return <div ref={mapContainer} className="map-container" />;
};

StaticMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      altitude: PropTypes.number.isRequired,
      distance: PropTypes.number.isRequired,
    })
  ).isRequired,
  hoveredPoint: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    altitude: PropTypes.number,
    distance: PropTypes.number,
  }),
};

export default StaticMap;
