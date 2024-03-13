import { Box, Typography } from "@mui/material";
import { Conversation } from "./types/conversation";

export function MessageDrawer({ messages, user }: Conversation) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height={200}
      width={200}
      overflow="scroll"
      right={168}
      bottom={30}
      position="fixed"
      padding={2}
      sx={{ backgroundColor: "white" }}
    >
      <Box display="flex" justifyContent="center">
        <Typography>{user.name}</Typography>
      </Box>
      {messages.map((message) => (
        <Box
          key={message.id}
          display="flex"
          justifyContent="flex-start"
          border="1px solid lightgrey"
          margin={0.5}
          padding={1}
          borderRadius={2}
          sx={{ backgroundColor: "green" }}
        >
          <Typography>{message.message}</Typography>
        </Box>
      ))}
    </Box>
  );
}
