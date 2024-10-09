/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HelpSupport = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your Form have been Submitted");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        mb: 4,
        background: "#fff",
        zIndex: 999,
        position: "relative",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Help & Support
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={form.message}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Grid>

        {/* FAQs */}
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Frequently Asked Questions
            </Typography>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How can I reset my password?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can reset your password by clicking on the "Forgot
                  Password" link on the login page.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>How do I contact customer support?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can contact customer support via the contact form or by
                  emailing support@fusionworld.in
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* Add more FAQs as needed */}
          </Box>
        </Grid>

        {/* Contact Information */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography>Email: support@fusionworld.in</Typography>
            <Typography>Phone: +911800556744</Typography>
            <Typography>
              Address: A-641, A Block, Ashok Nagar, New Delhi, Delhi 110096
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpSupport;
