import Papa from 'papaparse';
import { RouteData } from '../types/routeTypes';

// Function to parse CSV data from a file
export const parseCSVData = async (filePath: string): Promise<RouteData[]> => {
  try {
    const response = await fetch(filePath);
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: (header) => {
          // Clean up header names to be consistent for our interface
          return header.trim()
            .replace(/\s+/g, '_')  // Replace spaces with underscores
            .replace(/[^a-zA-Z0-9_]/g, '')  // Remove any non-alphanumeric characters except underscores
            .toUpperCase(); // Convert to uppercase
        },
        complete: (results) => {
          const parsedData = results.data as any[];
          
          // Map the parsed data to our RouteData interface
          const routeData = parsedData.map((item: any) => {
            return {
              ID: item.ID || 0,
              TUM_Route_ID: item.TUM_ROUTE_ID?.toString() || '',
              Amnex_routeid: item.AMNEX_ROUTEID?.toString() || '',
              MTC_ROUTE_No: item.MTC_ROUTE_NO?.toString() || '',
              STOP_ID: item.STOP_ID?.toString() || '',
              SEQUENCE: parseInt(item.SEQUENCE) || 0,
              STOP_NAME: item.STOP_NAME?.toString() || '',
              LAT: parseFloat(item.LAT) || 0,
              LON: parseFloat(item.LON) || 0,
              SOURCE: item.SOURCE?.toString() || '',
              DESTIN: item.DESTIN?.toString() || '',
              DIRECTION: item.DIRECTION?.toString() || '',
              STAGEID: item.STAGEID?.toString() || '',
              STAGENO: item.STAGENO?.toString() || '',
              STAGENAME: item.STAGENAME?.toString() || '',
              STAGENO_CLEAN: item.STAGENO_CLEAN?.toString() || '',
              STAGENAME_CLEAN: item.STAGENAME_CLEAN?.toString() || ''
            } as RouteData;
          }).filter(item => 
            // Filter out any entries that don't have valid coordinates
            !isNaN(item.LAT) && 
            !isNaN(item.LON) && 
            item.LAT !== 0 && 
            item.LON !== 0
          );
          
          resolve(routeData);
        },
        error: (error: Error) => {
          reject(error);
        }
      });
    });
  } catch (error: unknown) {
    console.error('Error fetching or parsing CSV:', error);
    throw error;
  }
}; 