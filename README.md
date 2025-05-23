# Chennai Multimodal Data ETL Project

This project contains Data ETL (Extract, Transform, Load) scripts for the Chennai Multimodal project, which processes transportation data from multiple modes of transit in Chennai, India.

## Overview

The project handles data conversion from various transit modes (Bus, Metro, and Suburban) into GTFS (General Transit Feed Specification) format. This standardized format is then consumed by OpenTripPlanner (OTP) to power the Chennai Multimodal application.

## Data Sources

The project processes data from three main transit modes:
- Bus transit data
- Metro transit data
- Suburban rail data

## Data Processing Workflow

1. **Data Extraction**: Raw data is extracted from various sources including:
   - CSV files (e.g., Stations Master DB)
   - JSON files (e.g., validStations)
   - Other transit-specific data sources

2. **Data Transformation**: The extracted data is transformed to:
   - Standardize station codes and names
   - Convert schedules and routes to GTFS format
   - Validate and clean the data

3. **Data Loading**: The processed GTFS data is:
   - Validated against GTFS specifications
   - Prepared for consumption by OTP
   - Made available for the Chennai Multimodal application

## Project Structure

The project includes scripts and tools for:
- Station code validation and mapping
- Schedule conversion
- Route processing
- GTFS generation
- Data validation

## Usage

[To be added: Instructions for running the ETL scripts and generating GTFS data]

## Dependencies

[To be added: List of required software and libraries]

## Contributing

[To be added: Guidelines for contributing to the project]

## License

[To be added: Project license information] 