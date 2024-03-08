import { Box, IconButton, Popover } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useRef, useState } from "react";
import { ConversationDrawer } from "./conversation-drawer";

export function MessagesButton() {
  const anchor = useRef<SVGSVGElement | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  function toggle() {
    setIsClicked(!isClicked);
  }
  return (
    <Box position="fixed" bottom={16} right={16}>
      <IconButton onClick={toggle} sx={{ color: "lightblue" }}>
        <MailIcon ref={anchor} fontSize="large" />
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
