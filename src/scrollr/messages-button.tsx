import { Box, IconButton } from "@mui/material";
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
    <Box position="fixed" bottom={20} right={20}>
      <IconButton onClick={toggle} sx={{ color: "rgb(179, 224, 255)" }}>
        <MailIcon ref={anchor} fontSize="large" />
      </IconButton>
      <ConversationDrawer
        open={isClicked}
        anchorEl={anchor.current}
        onClose={toggle}
      />
    </Box>
  );
}
