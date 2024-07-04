import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="background.default"
      color="text.primary"
      p={3}
    >
      <Typography variant="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h2" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h3" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h4" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="h5">Page Not Found</Typography>
    </Box>
  );
};

export default NotFound;
