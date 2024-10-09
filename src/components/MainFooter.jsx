/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "../styledComponents/MainFooter.css";

const MainFooter = () => {
  const handleLinkedInIcon = () => {
    window.location.href = "https://www.linkedin.com/in/aasifias2810";
  };

  const handleFacebookIcon = () => {
    alert("Facebook");
  };

  const handleTwitterIcon = () => {
    alert("Twitter");
  };

  const handleInstagramIcon = () => {
    alert("Instagram");
  };

  return (
    <Box className="main-box">
      <Box className="shop-now-text">
        <ShoppingCartIcon sx={{ fontSize: "40px" }} />
        <Typography sx={{ fontWeight: "600" }} variant="h5">
          FusionWorld
        </Typography>
      </Box>
      <Box className="wrap-box" sx={{ gap: { xs: "25px", lg: "50px" } }}>
        <LinkedInIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={handleLinkedInIcon}
        />
        <InstagramIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={handleInstagramIcon}
        />
        <FacebookIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={handleFacebookIcon}
        />
        <TwitterIcon
          className="icon-style"
          sx={{ fontSize: "30px", padding: "4px" }}
          onClick={handleTwitterIcon}
        />
      </Box>
      <Box className="text-box">
        <CopyrightIcon sx={{ fontSize: { xs: "18px", lg: "18px" } }} />
        <Typography variant="h6" sx={{ fontSize: { xs: "16px" } }}>
          {new Date().getFullYear()} <b>FusionWorld.</b> All Rights Reserved.
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
          Ownered by Aasif Noor.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainFooter;
