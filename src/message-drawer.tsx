import {
  Box,
  IconButton,
  PopoverPaper,
  TextField,
  Typography,
} from "@mui/material";
import { Conversation } from "./types/conversation";
import { useMemo, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { addMessage } from "./service/add-message";
import { useQueryClient } from "react-query";
import { MessageCard } from "./message-card";

export function MessageDrawer({ messages, user }: Conversation) {
  const [directMessage, setDirectMessage] = useState("");

  const queryClient = useQueryClient();

  const reversed = useMemo(() => messages.reverse(), [messages]);

  return (
    <PopoverPaper
      elevation={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50%",
        width: 300,
        right: 360,
        top: 103,
        position: "fixed",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        padding={2}
        paddingBottom={1}
        borderBottom="1px solid black"
      >
        <Typography variant="body1" sx={{ fontWeight: 900 }}>
          {user.name}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column-reverse"
        flexGrow={1}
        overflow="scroll"
        paddingRight={2}
        paddingLeft={2}
      >
        {reversed.map((message) => (
          <MessageCard key={message.id} message={message} />
        ))}
      </Box>
      <Box display="flex" flexDirection="column" padding={0.25}>
        <TextField
          placeholder="Type message here"
          value={directMessage}
          onChange={(evt) => setDirectMessage(evt.target.value)}
          sx={{ padding: 2 }}
        />
        <Box display="flex" justifyContent="flex-end" style={{ cursor: "pointer" }}>
          <IconButton
          disabled={!directMessage}
            onClick={() => {
              addMessage(directMessage, user.twitterHandle);
              queryClient.invalidateQueries({ queryKey: "conversations" });
              setDirectMessage("");
            }}
          >
            <ArrowCircleUpIcon
              sx={{
                color: "white",
                borderRadius: 10,
                backgroundColor: "rgb(0, 82, 204)",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </PopoverPaper>
  );
}
