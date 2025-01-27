import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";

interface DropdownProps {
  selectedProperty: string;
  onPropertyChange: (property: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  selectedProperty,
  onPropertyChange,
}) => {
  const properties = ["Propiedad 1", "Propiedad 2", "Propiedad 3"];

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{ minWidth: 150, marginRight: 2 }}
    >
      <InputLabel>Propiedad</InputLabel>
      <Select
        value={selectedProperty}
        onChange={(e) => onPropertyChange(e.target.value)}
        label="Propiedad"
      >
        {properties.map((property) => (
          <MenuItem key={property} value={property}>
            {property}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
