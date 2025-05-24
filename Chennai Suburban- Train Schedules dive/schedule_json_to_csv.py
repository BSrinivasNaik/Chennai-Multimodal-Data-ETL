import json
import csv
import os

def schedule_json_to_csv(json_file, csv_file):
    """
    Convert ScheduleAPI JSON to CSV format
    
    Args:
        json_file (str): Path to the ScheduleAPI JSON file
        csv_file (str): Path to the output CSV file
    """
    # Read the JSON file
    with open(json_file, 'r', encoding='utf-8') as f:
        schedule_data = json.load(f)
    
    if not schedule_data:
        print(f"Error: No data found in {json_file}")
        return
    
    # Create CSV file
    with open(csv_file, 'w', newline='', encoding='utf-8') as f:
        # Define headers for CSV
        headers = ['trainNo', 'stationSr', 'stationCode', 'schArrTime', 'schDepTime', 'sequence']
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        
        # Process each train schedule
        for train in schedule_data:
            train_no = train.get('trainNo', '')
            stations = train.get('schStations', [])
            
            # Write each station entry as a row
            for station in stations:
                row = {
                    'trainNo': train_no,
                    'stationSr': station.get('Sr', ''),
                    'stationCode': station.get('stationCode', ''),
                    'schArrTime': station.get('schArrTime', ''),
                    'schDepTime': station.get('schDepTime', ''),
                    'sequence': station.get('sequence', '')
                }
                writer.writerow(row)
    
    print(f"Successfully converted {json_file} to {csv_file}")

def main():
    json_file = "Schedules_23April.json"
    csv_file = "train_schedules.csv"
    
    if not os.path.exists(json_file):
        print(f"Error: {json_file} not found")
        return
    
    schedule_json_to_csv(json_file, csv_file)
    
    # Print summary
    if os.path.exists(csv_file):
        # Count lines to report how many records were processed
        with open(csv_file, 'r', encoding='utf-8') as f:
            line_count = sum(1 for _ in f) - 1  # Subtract 1 for header
        print(f"Created CSV with {line_count} train station schedule entries")

if __name__ == "__main__":
    main() 