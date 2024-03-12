import { useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Conversation } from "./types/conversation";
import { Box, Typography } from "@mui/material";

export function ConversationDrawer() {
  const conversations = useConversations();

  const [selectedConvo, setSelectedConvo] = useState<Conversation>();

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
      >
        {conversations.map((conversation, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor:
                conversation.user.twitterHandle ===
                selectedConvo?.user.twitterHandle
                  ? "blue"
                  : "none",
              paddingLeft: 2,
            }}
            onClick={() => setSelectedConvo(conversation)}
          >
            {conversation.user.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
