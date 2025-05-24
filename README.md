# Multimodal Transport Data ETL & Pre-processing

## Overview
This project contains ETL (Extract, Transform, Load) jobs and data processing scripts for multiple modes of transport in Chennai, including Suburban Rail, Bus, and Metro data. The goal is to prepare, standardize, and validate transit data for use in a unified Multimodal Journey Planner and related applications.

## Updated Goals of Pre-processing (Bus, Suburban Railway, Metro) Data for a Multimodal App

- **Standardization** – Unify data formats (GTFS, time zones, location schema).
- **De-duplication** – Eliminate route/stop overlaps across modes.
- **Validation** – Detect errors in timings, coordinates, trip patterns.
- **Correction via Ops Agents** – Use local human agents to verify/correct mismatches in stops, paths, and schedules.
- **Enrichment** – Tag data with mode, operator, fare type, service category.
- **Visualization** – Map routes/stops for manual QA, ops feedback, and debugging.
- **Integration-ready Output** – Output clean, unified data for journey planner/API use.

## Subfolders & Components
- **Chennai Suburban- data/** – Raw and processed data for Suburban Rail.
- **Chennai Bus- Routes Visualisation dashboard/** – Dashboard for visualizing and QA of bus routes and stops.
- **Compare Chennai SuburbanStations_ CRIS vs InternalTable/** – Tools for comparing and validating station lists.
- **Chennai Suburban- Train Schedules dive/** – Contains train schedule data (CSV and JSON) and scripts for converting and processing suburban train schedules for integration into the multimodal journey planner.

## How to Use
1. Run ETL scripts in each subfolder to process and clean the data.
2. Use the visualization dashboards for manual QA and feedback.
3. Final output is a set of standardized, validated, and enriched datasets ready for integration into the Chennai Multimodal app or journey planner APIs.

---
For more details, see the README files in each subfolder. 