/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  // validateto  each field
  const validateField = (name, value) => {
    let errorMsg = "";

    // firstName
    if (name === "firstName") {
      if (!value) {
        errorMsg = "First Name is required";
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        errorMsg = "First Name can only contain letters";
      }
      // lastName
    } else if (name === "lastName") {
      if (!value) {
        errorMsg = "Last Name is required";
      } else if (!/^[a-zA-Z]+$/.test(value)) {
        errorMsg = "Last Name can only contain letters";
      }
      // email
    } else if (name === "email") {
      if (!value) {
        errorMsg = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMsg = "Email is not valid";
      }
      // password
    } else if (name === "password") {
      if (!value) {
        errorMsg = "Password is required";
      } else if (value.length < 8) {
        errorMsg = "Password must be at least 8 characters";
      } else if (!/[A-Z]/.test(value)) {
        errorMsg = "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(value)) {
        errorMsg = "Password must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(value)) {
        errorMsg = "Password must contain at least one number";
      } else if (!/[@$!%*?&]/.test(value)) {
        errorMsg = "Password must contain at least one special character";
      }
      // confirmPassword
    } else if (name === "confirmPassword") {
      if (!value) {
        errorMsg = "Confirm Password is required";
      } else if (value !== formData.password) {
        errorMsg = "Passwords do not match";
      }
    }
    setErrors({ ...errors, [name]: errorMsg });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/Dashboard");
    }
  };

  const handleClickShowPassword1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        padding: "0",
        textAlign: "justify",
        background: "#fff",
        zIndex: 999,
        position: "relative",
      }}
    >
      <Box sx={{ display: { xs: "block", lg: "none", md: "none" } }}>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ height: "60px" }}>
            <Box sx={{ mr: 3, display: "flex" }}>
              <img
                height={"50px"}
                width={"50px"}
                src="favicon/FusionWorld_Logo.png"
                alt="logo"
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Typography
                sx={{ fontWeight: "600", fontFamily: "Roboto" }}
                variant="h6"
                color="inherit"
                component="div"
              >
                <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                  FusionWorld
                </Link>
              </Typography>
              <Typography>Become a Partner</Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mt: 5, padding: "0 25px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              fullWidth
              margin="normal"
              required
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Box>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword1 ? "Text" : "password"}
            value={formData.password}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword1}
                    edge="end"
                  >
                    {showPassword1 ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Box
            sx={{
              color: "rgba(0, 0, 0, 0.77)",
            }}
          >
            <Typography
              sx={{ mt: 1, fontFamily: "Roboto, sans-serif", fontSize: "16px" }}
            >
              “Password must be at least 8 characters.”
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Registration;
