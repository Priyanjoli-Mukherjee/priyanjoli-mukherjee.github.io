import { useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Conversation } from "./types/conversation";
import { Box, Typography } from "@mui/material";

export function ConversationDrawer() {
  const conversations = useConversations();

  const [selectedConvo, setSelectedConvo] = useState<number>();

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Box
        borderBottom="1px solid black"
        paddingBottom={1}
        paddingTop={2}
        paddingRight={2}
        paddingLeft={2}
      >
        <Typography>Conversations</Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        paddingBottom={1}
        paddingTop={1}
        paddingRight={2}
        paddingLeft={2}
      >
        {conversations.map((conversation, index) => (
          <Box
            key={index}
            sx={{ backgroundColor: selectedConvo === index ? "blue" : "none" }}
            onClick={() => setSelectedConvo(index)}
          >
            {conversation.user.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
