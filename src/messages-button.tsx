import { Box, IconButton, Popover } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useRef, useState } from "react";
import { ConversationDrawer } from "./conversation-drawer";

export function MessagesButton() {
  const anchor = useRef<HTMLButtonElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  function toggle() {
    setIsClicked(!isClicked);
  }
  return (
    <Box marginBottom={2} marginLeft={10}>
      <IconButton color="primary" ref={anchor} onClick={toggle}>
        <MailIcon fontSize="large" />
      </IconButton>
      <Popover
        open={isClicked}
        anchorEl={anchor.current}
        onClose={toggle}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <ConversationDrawer />
      </Popover>
    </Box>
  );
}
