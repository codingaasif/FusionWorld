/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../styledComponents/MainFooter.css";

const MainFooter = () => {
  return (
    <Box className="main-box">
      <Box className="shop-now-text">
        <ShoppingCartIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontWeight: "600" }} variant="h5">
          Shop Now
        </Typography>
      </Box>
      <Box className="wrap-box" sx={{ gap: { xs: "25px", lg: "50px" } }}>
        <LinkedInIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={() => alert("Linked")}
        />
        <InstagramIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={() => alert("Instagram")}
        />
        <FacebookIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={() => alert("Facebook")}
        />
        <TwitterIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={() => alert("Twitter")}
        />
      </Box>
      <Box className="text-box">
        <CopyrightIcon sx={{ fontSize: { xs: "20px", lg: "20px" } }} />
        <Typography variant="h6" sx={{ fontSize: { xs: "16px" } }}>
          2024 ElectroChic. All Rights Reserved.
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "7px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: "16px" }, fontWeight: "600" }}
        >
          CEO Aasif Noor.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainFooter;
