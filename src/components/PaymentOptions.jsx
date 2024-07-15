/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Grid,
  Box,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaymentForm = ({ setModalOpen }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardEndDate, setCardEndDate] = useState(
    `${currentYear}-${currentMonth.toString().padStart(2, "0")}`
  );
  const [cardCVV, setCardCVV] = useState("");
  const [upiId, setUpiId] = useState("");
  const [upiError, setUpiError] = useState("");
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardCVVError, setCardCVVError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameOnCardChange = (event) => {
    const value = event.target.value;
    setNameOnCard(value);
    validateNameOnCard(value);
  };

  const validateNameOnCard = (name) => {
    if (!name) {
      setNameError("Name on card is required");
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      setNameError("Name on card can only contain letters and spaces");
    } else {
      setNameError("");
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    setUpiId("");
    setCardNumber("");
    setCardCVV("");
    setErrorMessage("");
    setNameError("");
    setCardNumberError("");
    setCardCVVError("");
    setUpiError("");
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value;
    setCardNumber(value);
    validateCardNumber(value);
  };

  const validateCardNumber = (cardNumber) => {
    if (!cardNumber) {
      setCardNumberError("Enter your Card Number");
    } else if (!/^\d{16}$/.test(cardNumber)) {
      setCardNumberError("Enter a valid Card Number");
    } else {
      setCardNumberError("");
    }
  };

  const handleCardEndDateChange = (event) => {
    const newEndDate = event.target.value;
    setCardEndDate(newEndDate);
    validateCardEndDate(newEndDate);
  };

  const validateCardEndDate = (date) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    if (isNaN(inputDate)) {
      setErrorMessage("Invalid date format.");
    } else if (inputDate < currentDate) {
      setErrorMessage("The card end date must be in the future.");
    } else {
      setErrorMessage("");
    }
  };

  const handleCardCVVChange = (event) => {
    const newCVV = event.target.value;
    setCardCVV(newCVV);
    validateCardCVV(newCVV);
  };

  const validateCardCVV = (cvv) => {
    if (!cvv) {
      setCardCVVError("Enter your CVV");
    } else if (!/^\d{3}$/.test(cvv)) {
      setCardCVVError("Enter a valid CVV");
    } else {
      setCardCVVError("");
    }
  };

  const handleUpiIdChange = (event) => {
    const upiId = event.target.value;
    setUpiId(upiId);
    validateUpiId(upiId);
  };

  const validateUpiId = (upiId) => {
    const upiPattern = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    if (upiPattern.test(upiId)) {
      setUpiError("");
    } else {
      setUpiError(
        "Invalid UPI ID format. It should be in the format username@bankname"
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (paymentMethod === "upi") {
      validateUpiId(upiId);
    } else {
      validateNameOnCard(nameOnCard);
      validateCardNumber(cardNumber);
      validateCardEndDate(cardEndDate);
      validateCardCVV(cardCVV);
    }

    if (
      paymentMethod === "upi"
        ? !upiError && upiId
        : !nameError && !cardNumberError && !cardCVVError && !errorMessage
    ) {
      toast.success("Order successfully placed.");
      setTimeout(() => {
        setModalOpen(false);
      }, 6000);
    } else {
      toast.error("Please fill all required fields correctly.");
    }
  };

  const handleCancelButton = () => {
    setModalOpen(false);
  };

  return (
    <>
      <ToastContainer
        style={{
          width: "250px",
          fontSize: "14px",
          top: "7%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Select Payment Method</FormLabel>
                <RadioGroup
                  aria-label="payment-method"
                  name="payment-method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Card"
                  />
                  <FormControlLabel
                    value="upi"
                    control={<Radio />}
                    label="UPI"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {paymentMethod === "card" && (
              <>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name-on-card"
                    label="Name on Card"
                    variant="outlined"
                    value={nameOnCard}
                    onChange={handleNameOnCardChange}
                    error={!!nameError}
                    helperText={nameError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="card-number"
                    label="Card Number"
                    variant="outlined"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    error={!!cardNumberError}
                    helperText={cardNumberError}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    type="month"
                    required
                    fullWidth
                    id="card-end-date"
                    label="End Date (MM/YY)"
                    variant="outlined"
                    value={cardEndDate}
                    onChange={handleCardEndDateChange}
                    error={!!errorMessage}
                    helperText={errorMessage}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    fullWidth
                    id="card-cvv"
                    label="CVV"
                    variant="outlined"
                    value={cardCVV}
                    onChange={handleCardCVVChange}
                    error={!!cardCVVError}
                    helperText={cardCVVError}
                  />
                </Grid>
              </>
            )}
            {paymentMethod === "upi" && (
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="upi-id"
                  label="UPI ID"
                  variant="outlined"
                  value={upiId}
                  onChange={handleUpiIdChange}
                  error={!!upiError}
                  helperText={upiError}
                />
              </Grid>
            )}
            <Grid item xs={12} sx={{ gap: "30px", display: "flex" }}>
              <Button type="submit" variant="contained" color="primary">
                Pay Now
              </Button>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleCancelButton}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default PaymentForm;
