/* eslint-disable react/prop-types */

import { Badge, Typography, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import HelpIcon from "@mui/icons-material/Help";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { useSelector } from "react-redux";

export default function Drawer({ badgeContent }) {
  const navigate = useNavigate();
  const userName = JSON.parse(localStorage.getItem("userData"));
  const favoriteItem = useSelector((state) => state?.favoriteItem);

  const DrawerContainer = styled("Box")({
    width: "250px",
    height: "300px",
    top: "55px",
    background: "#1976d2",
    color: "#fff",
    padding: "10px 0 10px 0",
    position: "fixed",
    borderRadius: "0 5px 5px 0 ",
    zIndex: 9999999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0px 0px 10px #1976d2",
  });

  const DrawerCart = styled("Box")({
    display: "flex",
    gap: "25px",
    alignItems: "center",
    padding: "10px",
  });

  const DrawerBox = styled("Box")({
    display: "flex",
    flexDirection: "column",
  });

  const handleMyCart = () => {
    if (badgeContent > 0) {
      navigate("/ReviewCard");
    }
  };

  const handleWishList = () => {
    if (favoriteItem.length > 0) {
      navigate("/Favorite");
    }
  };

  const handleHelpSupport = () => {
    navigate("/HelpSupport");
  };

  const handleLogOutPage = () => {
    // localStorage.removeItem("userData");
    navigate("/");
  };

  return (
    <DrawerContainer>
      <DrawerBox>
        <DrawerCart>
          <AccountCircleIcon sx={{ fontSize: "30px" }} />
          <Typography>
            Hey! {userName.firstName} {userName.lastName}
          </Typography>
        </DrawerCart>
        <DrawerCart onClick={handleMyCart}>
          <Badge badgeContent={badgeContent} color="secondary">
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>My Orders</Typography>
        </DrawerCart>
        <DrawerCart onClick={handleWishList}>
          <Badge badgeContent={favoriteItem.length} color="secondary">
            <FavoriteIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>My Wishlists</Typography>
        </DrawerCart>
        <DrawerCart onClick={handleHelpSupport}>
          <HelpIcon sx={{ fontSize: "30px" }} />
          <Typography>Help & Support</Typography>
        </DrawerCart>
        <DrawerCart>
          <Badge badgeContent={11} color="secondary" onClick={handleWishList}>
            <CircleNotificationsIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>Notifications</Typography>
        </DrawerCart>
        <DrawerCart onClick={handleLogOutPage}>
          <LogoutIcon sx={{ fontSize: "30px" }} />
          <Typography>Logout</Typography>
        </DrawerCart>
      </DrawerBox>
    </DrawerContainer>
  );
}
