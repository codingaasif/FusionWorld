/* eslint-disable react/prop-types */
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
import {
  SearchIconWrapper,
  Search,
  StyledInputBase,
} from "../styledComponents/PrimaryHeader";
import Drawer from "./Drawer";

export default function PrimaryHeader({ setSearched, state }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const selectorData = useSelector((state) => state?.data);
  const cartCount = useSelector((state) => state?.items);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const Filter = (event) => {
    setSearched(
      selectorData?.filter((f) =>
        f.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const cartData = useSelector((state) => state?.items);
  const favoriteItem = useSelector((state) => state?.favoriteItem);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mr: 0, mt: 6 }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
        marginTop: "100px",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const openCardMenu = () => {
    if (cartData.length > 0) {
      navigate("/ReviewCard");
    }
  };

  const openFavoriteItems = () => {
    console.log(favoriteItem, "favoriteItem");
    if (favoriteItem.length > 0) {
      navigate("/Favorite");
    }
  };

  const handleMenuIcon = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ marginBottom: "30px" }}>
        <Toolbar>
          <Box
            sx={{
              display: { xs: "none", sm: "block", lg: "flex" },
              padding: "5px",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <img
              height={"45px"}
              width={"45px"}
              src="favicon/Fusion-shop.png"
              alt="logo"
            />
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenuIcon}
            sx={{
              mr: 2,
              display: {
                lg: "none",
                cursor: "pointer",
              },
              marginRight: {
                xs: "0px",
              },
            }}
          >
            {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => navigate("/")}
            sx={{
              display: {
                xs: "none",
                sm: "block",
                marginRight: "20px",
                cursor: "pointer",
              },
            }}
          >
            Home
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", gap: "16px" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: { xs: "20px", md: "25px", lg: "30px" },
                fontStyle: "italic",
                fontWeight: "600",
              }}
            >
              FusionShop
            </Typography>
            <Search
              sx={{
                width: { xs: "50%", md: "30%", lg: "50%" },
                height: "40px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>

              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={Filter}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge
                onClick={() => navigate(`/favorite`)}
                badgeContent={state?.length}
                color="error"
              >
                <Tooltip title="Favorite">
                  <FavoriteIcon
                    sx={{ width: "25px" }}
                    onClick={openFavoriteItems}
                  />
                </Tooltip>
              </Badge>
            </IconButton>
            <IconButton size="large" color="inherit">
              <Badge badgeContent={cartCount?.length} color="error">
                <Tooltip title="Shoping Cart">
                  <ShoppingCartIcon
                    onClick={openCardMenu}
                    sx={{ width: "25px" }}
                  />
                </Tooltip>
              </Badge>
            </IconButton>

            <IconButton size="large" color="inherit">
              <Badge badgeContent={11} color="error">
                <Tooltip title="Notification">
                  <NotificationsIcon sx={{ width: "25px" }} />
                </Tooltip>
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ width: "25px" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box sx={{ display: { lg: "none", sm: "block" } }}>
        {isDrawerOpen ? (
          <Drawer
            isDrawerOpen={isDrawerOpen}
            badgeContent={cartCount?.length}
            favContent={state?.length}
          />
        ) : null}
      </Box>
    </Box>
  );
}
