import { Box, CardContent, CardMedia, Typography, styled } from "@mui/material";

export const CardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
});

export const CardContents = styled(CardContent)({
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const CardMedias = styled(CardMedia)({
  height: 210,
  width: 210,
  backgroundSize: "contain",
  border: "5px solid #1976d2",
  padding: "10px",
  borderRadius: "10px",
});

export const TypographyCard = styled(Typography)({
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const BoxContainer = styled(Box)({
  width: "85%",
  display: "flex",
  margin: "auto",
});
