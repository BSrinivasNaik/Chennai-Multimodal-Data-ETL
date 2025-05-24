# Chennai Suburban Rail Data

## Overview
This folder contains raw and processed data, as well as scripts, for the Chennai Suburban Rail system. The data is used for ETL (Extract, Transform, Load) and pre-processing as part of the larger multimodal transport project.

## Contents
- `suburban_corridor.geojson` – GeoJSON file with corridor geometry.
- `suburban stations.csv` – List of suburban stations.
- `suburban stations.geojson` – GeoJSON with station locations.
- `FareAPI- V1 API vs V3 API.json` – Fare API comparison data.

## How to Use
1. Use the CSV and GeoJSON files as input for ETL scripts or GIS tools.
2. Integrate the data into the multimodal journey planner after validation and standardization.
3. For custom processing, write scripts to parse and transform the data as needed.

## Notes
- Ensure all data is validated and standardized before integration.
- For more details, see the main project README. 