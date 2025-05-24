import { useEffect, useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, Typography, CircularProgress } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import RouteSelectorComponent from '../components/RouteSelector';
import { RouteData, StopData } from '../types/routeTypes';
import { parseCSVData } from '../utils/csvParser';

// Dynamically import the map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Box>
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [routeData, setRouteData] = useState<RouteData[]>([]);
  const [uniqueRoutes, setUniqueRoutes] = useState<string[]>([]);
  const [selectedRouteId, setSelectedRouteId] = useState<string>('');
  const [selectedRouteStops, setSelectedRouteStops] = useState<StopData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await parseCSVData('/data/routes.csv');
        setRouteData(data);
        
        // Extract unique TUM_Route IDs
        const uniqueIds = Array.from(new Set(data.map((route: RouteData) => route.TUM_Route_ID)));
        setUniqueRoutes(uniqueIds);
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading route data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Update selected route stops when a route is selected
  useEffect(() => {
    if (selectedRouteId && routeData.length > 0) {
      const filteredStops = routeData.filter(
        stop => stop.TUM_Route_ID === selectedRouteId
      ).sort((a, b) => a.SEQUENCE - b.SEQUENCE);
      
      setSelectedRouteStops(filteredStops);
    } else {
      setSelectedRouteStops([]);
    }
  }, [selectedRouteId, routeData]);

  const handleRouteSelect = (routeId: string) => {
    setSelectedRouteId(routeId);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Bus Routes Visualization Dashboard</title>
        <meta name="description" content="A dashboard to visualize bus routes on a map" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" 
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" 
          crossOrigin="" />
      </Head>
      
      <main>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Bus Routes Visualization Dashboard
          </Typography>
          
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              <RouteSelectorComponent 
                routes={uniqueRoutes} 
                onRouteSelect={handleRouteSelect} 
              />
              
              <Box sx={{ height: 600, width: '100%', mt: 2 }}>
                <MapComponent stops={selectedRouteStops} />
              </Box>
            </>
          )}
        </Container>
      </main>
    </ThemeProvider>
  );
} 