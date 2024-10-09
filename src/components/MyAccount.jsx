import { Box, Typography, styled } from "@mui/material";
import { useNavigate } from "react-router";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";

const MyAccount = () => {
  const navigate = useNavigate();
  const getLocalData = JSON.parse(localStorage.getItem("userData")) || {};

  const handleLogOutPage = () => {
    // localStorage.removeItem("userData");
    navigate("/");
  };

  const AccountCard = styled("Box")({
    display: "flex",
    gap: "25px",
    alignItems: "center",
    padding: "10px",
  });

  return (
    <Box maxWidth="sm" sx={{ padding: "0" }}>
      <AccountCard>
        <AccountCircleIcon sx={{ fontSize: "30px" }} />
        <Typography>
          Hey! {getLocalData.firstName} {getLocalData.lastName}
        </Typography>
      </AccountCard>
      <AccountCard>
        <EmailIcon />
        <Typography variant="body1">{getLocalData.email}</Typography>
      </AccountCard>
      <AccountCard onClick={handleLogOutPage}>
        <LogoutIcon sx={{ fontSize: "30px" }} />
        <Typography>Logout</Typography>
      </AccountCard>
    </Box>
  );
};

export default MyAccount;
