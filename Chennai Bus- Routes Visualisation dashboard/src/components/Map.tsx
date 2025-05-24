import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { StopData } from '../types/routeTypes';
import { Box, Paper, Typography } from '@mui/material';

interface MapProps {
  stops: StopData[];
}

const Map: React.FC<MapProps> = ({ stops }) => {
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([13.0827, 80.2707]); // Default: Chennai
  const [mapZoom, setMapZoom] = useState(12);

  // Update map center and zoom when stops change
  useEffect(() => {
    if (stops && stops.length > 0) {
      // Set map center to the first stop of the route
      setMapCenter([stops[0].LAT, stops[0].LON]);
      setMapZoom(13); // Closer zoom when showing a specific route
    } else {
      // Reset to default view if no stops
      setMapCenter([13.0827, 80.2707]);
      setMapZoom(12);
    }
  }, [stops]);

  // Create route polyline coordinates
  const polylinePositions: LatLngExpression[] = stops.map(stop => [stop.LAT, stop.LON]);

  // Custom marker icon
  const busStopIcon = new Icon({
    iconUrl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png',
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
  });

  return (
    <Paper elevation={3} sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <MapContainer 
        center={mapCenter} 
        zoom={mapZoom} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {stops.length > 0 && (
          <>
            {/* Route line */}
            <Polyline 
              positions={polylinePositions} 
              color="#1976d2"
              weight={4}
              opacity={0.8}
            />
            
            {/* Stop markers */}
            {stops.map((stop, index) => (
              <Marker 
                key={`${stop.STOP_ID}-${index}`}
                position={[stop.LAT, stop.LON]}
                icon={busStopIcon}
              >
                <Popup>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {stop.STOP_NAME}
                    </Typography>
                    <Typography variant="body2">
                      Stop Sequence: {stop.SEQUENCE}
                    </Typography>
                    <Typography variant="body2">
                      Route: {stop.MTC_ROUTE_No} 
                    </Typography>
                    <Typography variant="body2">
                      Direction: {stop.DIRECTION}
                    </Typography>
                  </Box>
                </Popup>
              </Marker>
            ))}
          </>
        )}
      </MapContainer>
    </Paper>
  );
};

export default Map; 