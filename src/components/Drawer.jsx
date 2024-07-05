/* eslint-disable react/prop-types */

import { Badge, Typography, styled } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router";
import HelpIcon from "@mui/icons-material/Help";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

export default function Drawer({ badgeContent, favContent }) {
  console.log(favContent, "favContent");
  console.log(badgeContent, "badgeContent");

  const navigate = useNavigate();
  const DrawerContainer = styled("Box")({
    width: "250px",
    height: "300px",
    top: "115px",
    background: "#fff",
    padding: "15px 0 15px 0",
    position: "fixed",
    borderRadius: "0 5px 5px 0 ",
    zIndex: 999,
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
    console.log("clicked My Cart");
    if (badgeContent > 0) {
      navigate("/ReviewCard");
    }
  };

  const handleWishList = () => {
    console.log("clicked WishList");
    if (favContent > 0) {
      navigate("/Favorite");
    }
  };

  return (
    <DrawerContainer>
      <DrawerBox>
        <DrawerCart>
          <AccountCircleIcon sx={{ fontSize: "30px" }} />
          <Typography>My Account</Typography>
        </DrawerCart>
        <DrawerCart onClick={handleMyCart}>
          <Badge badgeContent={badgeContent} color="error">
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>My Orders</Typography>
        </DrawerCart>
        <DrawerCart onClick={handleWishList}>
          <Badge badgeContent={favContent} color="error">
            <FavoriteIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>My Wishlists</Typography>
        </DrawerCart>
        <DrawerCart>
          <HelpIcon sx={{ fontSize: "30px" }} />
          <Typography>Help & Support</Typography>
        </DrawerCart>
        <DrawerCart>
          <Badge badgeContent={11} color="error" onClick={handleWishList}>
            <CircleNotificationsIcon sx={{ fontSize: "30px" }} />
          </Badge>
          <Typography>Notifications</Typography>
        </DrawerCart>
        <DrawerCart onClick={() => alert("Logout")}>
          <LogoutIcon
            sx={{ fontSize: "30px" }}
            onClick={() => alert("Logout")}
          />
          <Typography>Logout</Typography>
        </DrawerCart>
      </DrawerBox>
    </DrawerContainer>
  );
}
