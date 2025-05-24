# Chennai Suburban Train Schedules

## Overview
This folder contains train schedule data and scripts for the Chennai Suburban Rail system. The data is used for ETL and pre-processing as part of the multimodal transport project.

## Contents
- `train_schedules.csv` – Main train schedule data (CSV).
- `Schedules_23April.json`, `Schedules_2April.json`, `ScheduleAPI_response.json` – Raw schedule data (JSON).
- `schedule_json_to_csv.py` – Script to convert JSON schedules to CSV.

## How to Use
1. To convert JSON schedules to CSV, run:
   ```bash
   python3 schedule_json_to_csv.py
   ```
2. Use the CSV file as input for further ETL or analytics.
3. Integrate the cleaned schedule data into the multimodal journey planner.

## Notes
- Always validate and standardize data before integration.
- For more details, see the main project README. 