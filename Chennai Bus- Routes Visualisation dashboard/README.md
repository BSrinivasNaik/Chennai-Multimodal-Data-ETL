# Chennai Bus Routes Visualisation Dashboard

## Overview
This project provides an interactive dashboard for visualizing bus routes in Chennai. It enables users to explore each route, view the sequence of stops, and see stop names on a map or in tabular form. The dashboard is designed to empower operations agents to identify, review, and fix route data as part of the data pre-processing workflow for the Chennai Multimodal app.

## Key Features
- **Route Visualisation:**
  - Visualizes all bus routes in Chennai using data from CUMTA and other sources.
  - Displays each route with its full sequence of stops and stop names.
  - Interactive map and table views for easy exploration.
- **Stop Sequence Analysis:**
  - Shows the order of stops for each route, helping to verify and correct stop sequences.
- **Search and Filter:**
  - Quickly find routes or stops by name or number.
- **Data Consistency Checks:**
  - Highlights inconsistencies or missing data in routes and stops.
- **Operations Agent Tools:**
  - Designed for use by operations agents to review, validate, and fix route data before it is integrated into the Chennai Multimodal app.

## Purpose
The main aim of this dashboard is to support the data pre-processing phase for the Chennai Multimodal app. By providing a clear visualisation of routes, stop names, and stop sequences, operations agents can:
- Identify all active and valid routes.
- Detect and correct errors or inconsistencies in route data.
- Ensure that the data is clean and ready for integration into the multimodal transport platform.

## How It Works
1. **Data Loading:**
   - Loads route and stop data from provided CSV or JSON files (see `Route Data- CUMTA/` for examples).
2. **Visualisation:**
   - Renders routes and stops on an interactive map and in tables.
   - Allows users to select a route and view its stop sequence and details.
3. **Review and Fix:**
   - Operations agents can use the dashboard to review each route, check stop order, and flag or fix issues.

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and go to [http://localhost:3000](http://localhost:3000)

## Folder Structure
- `src/` - Main application source code
- `public/` - Static assets
- `Route Data- CUMTA/` - Example data files

## For Operations Agents
- Use the dashboard to review all routes and their stop sequences.
- Flag or correct any issues before the data is used in the Chennai Multimodal app.

---
For more details, see the code and comments in the `src/` directory.

## Data Source

The application uses the route data from the CUMTA dataset, which contains information about bus routes, stops, and other transit details.

## Technology Stack

- React.js
- Next.js
- TypeScript
- Material-UI for components
- Leaflet for mapping
- PapaParse for CSV parsing 