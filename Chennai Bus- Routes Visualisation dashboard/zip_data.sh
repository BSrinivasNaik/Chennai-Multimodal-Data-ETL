#!/bin/bash
# Zip all files in Route Data- CUMTA directory
cd "Route Data- CUMTA" || exit 1
zip -r ../route_data_cumta.zip .
echo "Data zipped to route_data_cumta.zip" 