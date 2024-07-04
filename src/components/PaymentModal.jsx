/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PaymentOptions from "./PaymentOptions";

const style = {
  position: "absolute",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "10px",
  bgcolor: "background.paper",
  border: "2px solid #1976d2",
  boxShadow: 24,
  p: 4,
  width: {
    xs: "65%",
    md: "50%",
    lg: "25%",
  },
  top: {
    xs: "50%",
    md: "50%",
    lg: "50%",
  },
};
const style1 = {
  mb: 2,
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "20px",
};

export default function PaymentModal({ modalOpen, setModalOpen, newPrice }) {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Box sx={{ width: { xs: "75%", md: "50%" } }}>
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={style1}>
            Payable Amount: ${newPrice}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <PaymentOptions setModalOpen={setModalOpen} />
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
