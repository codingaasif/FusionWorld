/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email && formData.password) {
      console.log("Form submitted:", formData);
      setFormData({ email: "", password: "" });
      setErrors({ email: "", password: "" });
      navigate("/Dashboard");
    }
  };

  // handleOnChange
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    validateForm(name, value);
  };

  // validateForm
  const validateForm = (name, value) => {
    let errorMsg = "";
    //   email
    if (name === "email") {
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
    }
    setErrors({ ...errors, [name]: errorMsg });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = () => {
    navigate("/Registration");
  };

  return (
    <Container sx={{ padding: "0" }} component="main" maxWidth="xs">
      <Box sx={{ display: { xs: "block", lg: "none", md: "none" } }}>
        <AppBar position="static">
          <Toolbar variant="dense" sx={{ height: "60px" }}>
            <Box sx={{ mr: 3, display: "flex" }}>
              <img
                height={"50px"}
                width={"50px"}
                src="favicon/Fusion-shop.png"
                alt="logo"
              />
            </Box>
            <Typography
              sx={{ fontWeight: "600", fontFamily: "Roboto" }}
              variant="h5"
              color="inherit"
              component="div"
            >
              FusionShop
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 25px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleOnChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? Text : "Password"}
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleOnChange}
            error={!!errors.password}
            helperText={errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
            By continuing, you agree to
            <Link
              style={{ padding: "0 5px", textDecoration: "none" }}
              to={"/TermsOfUse"}
            >
              FusionShop's
            </Link>
            Terms of Use and Privacy Policy.
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSignUp}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
