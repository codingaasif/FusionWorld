import { Route, Routes } from "react-router";
import Dashboard from "../components/Dashboard";
import ReviewCard from "../components/ReviewCard";
import ProductDetails from "../components/ProductDetails";
import { Box, Button, FormControlLabel, Switch, styled } from "@mui/material";
import { useState } from "react";
import Favorite from "../components/Favorite";
import NotFound from "../components/NotFound";
import Drawer from "../components/Drawer";

const ProductRouter = () => {
  const [theme, setTheme] = useState(false);

  const handleToggleMode = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const IOSSwitch = styled(({ ...other }) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...other}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,

    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#39393D",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#39393D",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme ? "#39393D" : "#E9E9EA",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#33cf4d",

      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const style = {
    margin: "0px",
    position: "fixed",
    top: "65px",
    zIndex: "1",
    right: "15px",
  };

  return (
    <Box style={{ marginTop: "80px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          <Button
            variant="contained"
            sx={{
              ...style,
              right: "auto",
              padding: "4px 10px",
              left: "20px",
              margin: {
                xs: "6px",
              },
            }}
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </span>
        <FormControlLabel
          sx={style}
          control={
            <IOSSwitch
              sx={{ m: 1 }}
              checked={theme}
              onChange={handleToggleMode}
            />
          }
        />
      </Box>
      <Routes>
        <Route path="/" element={<Dashboard theme={theme} />} />
        <Route
          path="/productId/:productId"
          element={<ProductDetails theme={theme} />}
        />
        <Route path="/ReviewCard" element={<ReviewCard theme={theme} />} />
        <Route path="/Favorite" element={<Favorite theme={theme} />} />
        <Route path="/Drawer" element={<Drawer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default ProductRouter;
