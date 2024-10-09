import { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

const AddressForm = () => {
  const [addressType, setAddressType] = useState("home");
  const [state, setState] = useState("");

  const handleAddressTypeChange = (event) => {
    setAddressType(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Use my current location
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Name" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="10-digit mobile number"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Pincode" variant="outlined" fullWidth required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Locality" variant="outlined" fullWidth required />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Address (Area and Street)"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="City/District/Town"
            variant="outlined"
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select value={state} onChange={handleStateChange}>
              <MenuItem value="State1">State1</MenuItem>
              <MenuItem value="State2">State2</MenuItem>
              <MenuItem value="State3">State3</MenuItem>
              {/* Add more state options */}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField label="Landmark (Optional)" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Alternate Phone (Optional)"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <RadioGroup
            value={addressType}
            onChange={handleAddressTypeChange}
            row
          >
            <FormControlLabel
              value="home"
              control={<Radio />}
              label="Home (All day delivery)"
            />
            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work (Delivery between 10 AM - 5 PM)"
            />
          </RadioGroup>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" color="warning" fullWidth>
            Save and Deliver Here
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddressForm;
