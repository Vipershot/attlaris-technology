import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectInput({ value, disabled, changeState }) {
  const [active, setActive] = React.useState(value);

  const handleChange = (event) => {
    setActive(event.target.value);
    changeState(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth:250 }}>
      <FormControl fullWidth>
        <Select
          sx={{ fontSize: 12 }}
          disabled={disabled}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          <MenuItem sx={{ fontSize: 12 }} value={true}>
            Activo
          </MenuItem>
          <MenuItem sx={{ fontSize: 12 }} value={false}>
            No Activo
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
