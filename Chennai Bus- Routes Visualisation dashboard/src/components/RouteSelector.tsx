import React, { useState, useEffect } from 'react';
import { 
  TextField, 
  Autocomplete, 
  Box, 
  Typography, 
  Paper
} from '@mui/material';
import { RouteSelectorProps } from '../types/routeTypes';

const RouteSelectorComponent: React.FC<RouteSelectorProps> = ({ routes, onRouteSelect }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // Handle route selection
  const handleRouteChange = (_event: React.SyntheticEvent, newValue: string | null) => {
    setSelectedValue(newValue);
    if (newValue) {
      onRouteSelect(newValue);
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Select a Route
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Autocomplete
          id="route-selector"
          options={routes}
          sx={{ width: 300 }}
          value={selectedValue}
          onChange={handleRouteChange}
          inputValue={searchValue}
          onInputChange={(_event, newInputValue) => {
            setSearchValue(newInputValue);
          }}
          renderInput={(params) => (
            <TextField 
              {...params} 
              label="Search by TUM_Route ID" 
              variant="outlined"
              placeholder="Type to search..."
              fullWidth
            />
          )}
          renderOption={(props, option) => (
            <li {...props}>
              <Typography variant="body1">
                Route ID: {option}
              </Typography>
            </li>
          )}
        />
      </Box>
    </Paper>
  );
};

export default RouteSelectorComponent; 