import { useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Conversation } from "./types/conversation";
import { Box, Typography } from "@mui/material";
import { MessageDrawer } from "./message-drawer";

export function ConversationDrawer() {
  const conversations = useConversations();

  const [selectedConvo, setSelectedConvo] = useState<Conversation>();

  return (
    <Box display="flex">
      {selectedConvo && (
        <MessageDrawer
          messages={selectedConvo.messages}
          user={selectedConvo.user}
        />
      )}
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
          {conversations.map((conversation) => (
            <Box
              key={conversation.user.twitterHandle}
              sx={{
                backgroundColor:
                  conversation.user.twitterHandle ===
                  selectedConvo?.user.twitterHandle
                    ? "lightBlue"
                    : "none",
                paddingLeft: 2,
                cursor: "pointer",
              }}
              onClick={() => setSelectedConvo(conversation)}
            >
              <Box display="flex" flexDirection="column">
                <Typography>{conversation.user.name}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
