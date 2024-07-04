import { Box, styled, Typography } from "@mui/material";
import Skeleton from "react-loading-skeleton";

export const CardArea = styled("Card")(({ theme }) => ({
  marginTop: "30px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
}));

export const BoxContainer = styled(Box)({
  display: "flex",
  gap: "46px",
  flexWrap: "wrap",
});

export const BoxItems = styled(Box)({
  borderRadius: "15px",
  width: "300px",
  height: "380px",
  textAlign: "center",
  padding: "20px",
  boxShadow: "0px 6px 15px lightblue",
  cursor: "pointer",
});

export const ImageDiv = styled("img")({
  width: "200px",
  height: "180px",
  border: "5px solid #1976d2",
  padding: "5px",
  borderRadius: "8px",
});

export const BoxButton = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  margin: "10px 0",
});

export const Typographys = styled(Typography)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const BoxArea = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  gap: "35px",
  flexWrap: "wrap",
  rowGap: "25px",
});

export const Skeletons = styled(Skeleton)({
  borderRadius: "15px",
  width: "300px",
  boxShadow: "0px 6px 15px lightblue",
  height: "380px",
  background: "lightblue",
  padding: "20px",
});

export const FooterContainer = styled(Box)({
  margin: "auto",
});
