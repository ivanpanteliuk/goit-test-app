import { InputLabel, MenuItem, Select } from "@mui/material";
import { Form } from "./Dropdown.styled";

export default function Dropdown({ value, onChange }) {
  return (
    <Form fullWidth>
      <InputLabel id="demo-simple-select-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Filter"
        value={value}
        onChange={onChange}
      >
        <MenuItem value="show all">Show all</MenuItem>
        <MenuItem value="follow">Follow</MenuItem>
        <MenuItem value="followings">Followings </MenuItem>
      </Select>
    </Form>
  );
}
