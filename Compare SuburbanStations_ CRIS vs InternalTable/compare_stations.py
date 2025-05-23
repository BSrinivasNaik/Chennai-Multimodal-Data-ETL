import pandas as pd
import json

# Read the CSV file
df_master = pd.read_csv('Stations in MasterDB_19May.csv')

# Read the JSON file
with open('validStations_response_19May.json', 'r') as f:
    valid_stations = json.load(f)

# Convert valid stations to a DataFrame for easier comparison
valid_stations_list = valid_stations['validStationsLists']
df_valid = pd.DataFrame(valid_stations_list)

# Get sets of station codes
master_codes = set(df_master['Code'].str.strip())
valid_codes = set(df_valid['stationCode'].str.strip())

# Find differences
only_in_master = master_codes - valid_codes
only_in_valid = valid_codes - master_codes
common_codes = master_codes.intersection(valid_codes)

print("\nStations only in Master DB:")
for code in sorted(only_in_master):
    station = df_master[df_master['Code'] == code].iloc[0]
    print(f"Code: {code}, Name: {station['Name']}")

print("\nStations only in Valid Stations:")
for code in sorted(only_in_valid):
    station = df_valid[df_valid['stationCode'] == code].iloc[0]
    print(f"Code: {code}, Name: {station['stationName']}")

print("\nCommon stations with different details:")
for code in sorted(common_codes):
    master_station = df_master[df_master['Code'] == code].iloc[0]
    valid_station = df_valid[df_valid['stationCode'] == code].iloc[0]
    
    differences = []
    if master_station['Name'].strip() != valid_station['stationName'].strip():
        differences.append(f"Name: Master='{master_station['Name']}' vs Valid='{valid_station['stationName']}'")
    if abs(float(master_station['Lat']) - float(valid_station['latitude'])) > 0.0001:
        differences.append(f"Latitude: Master={master_station['Lat']} vs Valid={valid_station['latitude']}")
    if abs(float(master_station['Lon']) - float(valid_station['longitude'])) > 0.0001:
        differences.append(f"Longitude: Master={master_station['Lon']} vs Valid={valid_station['longitude']}")
    
    if differences:
        print(f"\nStation Code: {code}")
        for diff in differences:
            print(f"  {diff}")

print(f"\nSummary:")
print(f"Total stations in Master DB: {len(master_codes)}")
print(f"Total stations in Valid Stations: {len(valid_codes)}")
print(f"Stations only in Master DB: {len(only_in_master)}")
print(f"Stations only in Valid Stations: {len(only_in_valid)}")
print(f"Common stations: {len(common_codes)}") 