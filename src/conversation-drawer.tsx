import { useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Conversation } from "./types/conversation";
import { Box, Typography } from "@mui/material";

export function ConversationDrawer() {
  const conversations = useConversations();

  const [selectedConvo, setSelectedConvo] = useState<Conversation>();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Typography>Conversations</Typography>
      <Box>{conversations.map((conversation) => conversation.user.name)}</Box>
    </Box>
  );
}
