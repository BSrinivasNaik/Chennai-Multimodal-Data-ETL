# Compare Chennai Suburban Stations: CRIS vs Internal Table

## Overview
This folder contains scripts and data for comparing suburban station lists from the CRIS system and the internal master table. The goal is to identify mismatches, missing stations, and discrepancies for data cleaning and integration.

## Contents
- `compare_stations.py` – Python script to compare station lists.
- `Stations in MasterDB_19May.csv` – Master station list (CSV).
- `validStations_response_19May.json` – CRIS/official station list (JSON).

## How to Use
1. Ensure you have Python 3.x installed.
2. Run the comparison script:
   ```bash
   python3 compare_stations.py
   ```
3. Review the output for mismatches and missing stations.
4. Use the results to update and clean the master station table.

## Notes
- Update the CSV/JSON files as new data becomes available.
- For more details, see the main project README. 