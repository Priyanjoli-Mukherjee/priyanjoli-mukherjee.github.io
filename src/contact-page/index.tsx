import { Box, Snackbar, SnackbarContent, Typography } from "@mui/material";
import { ContactField } from "./styles/contact-field";
import { useState } from "react";
import { SubmitButton } from "./styles/submit-button";
import { TextArea } from "../components/text-area";
import { MuiTelInput } from "mui-tel-input";
import { sendEmail } from "./service/send-email";

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isToastOpen, setToastOpen] = useState(false);

  return (
    <Box display="flex" justifyContent="space-between" height="100vh">
      <Box
        alignItems="center"
        display="flex"
        width="50%"
        height="100%"
        padding={5}
        sx={{ backgroundColor: "rgb(0, 51, 153)" }}
      >
        <Box>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Let&apos;s Talk!
          </Typography>
          <Typography
            variant="h5"
            sx={{ marginBottom: 3, marginTop: 3, textAlign: "justify" }}
          >
            Reach out to me if you have a question or would like to start
            working on a project, or if you just want to get in touch with me!
          </Typography>
          <Typography variant="h5" sx={{ textAlign: "justify" }}>
            Feel free to send me a message through the contact form.
          </Typography>
        </Box>
      </Box>
      <Box
        alignItems="center"
        display="flex"
        width="50%"
        height="100%"
        flexDirection="column"
        justifyContent="center"
        padding={5}
        sx={{ backgroundColor: "white" }}
      >
        <Typography variant="h4" sx={{ color: "black", marginBottom: 1 }}>
          Contact
        </Typography>
        <ContactField
          autoFocus
          placeholder="John Doe"
          required
          label="Name"
          variant="outlined"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ContactField
          placeholder="johndoe@gmail.com"
          required
          label="Email"
          variant="outlined"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <MuiTelInput
          variant="outlined"
          label="Phone"
          value={phone}
          defaultCountry="US"
          onChange={(value) => setPhone(value)}
          sx={{
            backgroundColor: "#dadde0",
            borderRadius: 1.25,
            width: "75%",
            margin: 1.25,
          }}
        />
        <TextArea
          placeholder="Tell me what you think!"
          variant="outlined"
          label="Message"
          required
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
          sx={{
            backgroundColor: "#dadde0",
            borderRadius: 1.25,
            width: "75%",
            margin: 1.25,
          }}
        />
        <SubmitButton
          disabled={!name || !email || !message}
          variant="contained"
          onClick={async () => {
            await sendEmail({ name, email, phone, message });
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setToastOpen(true);
          }}
        >
          <Typography variant="body1">Submit</Typography>
        </SubmitButton>
        <Snackbar
          open={isToastOpen}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          onClose={() => setToastOpen(false)}
        >
          <SnackbarContent
            message="Email sent!"
            sx={{
              backgroundColor: "white",
              borderLeft: "5px solid green",
              color: "black",
            }}
          />
        </Snackbar>
      </Box>
    </Box>
  );
}
