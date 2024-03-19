import { useMemo, useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Box, Typography } from "@mui/material";
import { MessageDrawer } from "./message-drawer";

export function ConversationDrawer() {
  const conversations = useConversations();

  const [selectedTwitterHandle, setSelectedTwitterHandle] = useState<string>();

  const selectedConvo = useMemo(
    () =>
      conversations.find(
        (conversation) =>
          conversation.user.twitterHandle === selectedTwitterHandle,
      ),
    [conversations, selectedTwitterHandle],
  );

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
          <Typography variant="body1" sx={{ fontWeight: 900 }}>
            Conversations
          </Typography>
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
              onClick={() =>
                setSelectedTwitterHandle(conversation.user.twitterHandle)
              }
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">
                  {conversation.user.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
