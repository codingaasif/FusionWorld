/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PaymentModal from "./PaymentModal";
import { useState } from "react";

const PriceDetails = ({ totalPrice }) => {
  const initialNewPrice = totalPrice - 5 + 2;
  const newPrice = totalPrice ? `${initialNewPrice}` : `$0`;
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const style = {
    display: "flex",
    position: "fixed",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px",
    marginTop: {
      xs: "40px",
      md: "40px",
      lg: "40px",
    },
    width: {
      xs: "80%",
      md: "30%",
      lg: "22%",
    },
    left: {
      xs: "40px",
      md: "75%",
      lg: "70%",
    },
  };

  return (
    <Box sx={style}>
      <Card
        sx={{
          maxWidth: 345,
          height: {
            xs: "60vh",
            md: "60vh",
            lg: "70vh",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            gap: "5px",
            flexDirection: "column",
            height: "60%",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            <strong style={{ fontSize: "22px" }}>Price Details</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            Original Price: <strong>${totalPrice}</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            Coupon Discount: <strong style={{ color: "	#fb4918" }}>$5</strong>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            Delivery Charges: <strong>$2</strong>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              fontSize: "20px",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            <strong>Total Amount: ${newPrice}</strong>
          </Typography>
          <Box sx={{ border: "1px solid #1976d2", borderRadius: "5px" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: "flex",
                padding: "7px",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <strong style={{ fontSize: "20px" }}>Pay With</strong>
              <Typography sx={{ fontSize: "14px" }}>Card & UPI</Typography>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              marginTop: "12px",
              marginBottom: {
                xs: "15px",
                md: "100px",
              },
            }}
          >
            <VerifiedUserIcon />
            <Typography variant="body2" color="text.secondary">
              Safe and Secure Payments. Easy to returns 100% Authentic Products.
            </Typography>
          </Box>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleOpenModal}
            >
              Proceed to Pay
            </Button>
            {modalOpen && (
              <PaymentModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                newPrice={newPrice}
              />
            )}
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PriceDetails;
