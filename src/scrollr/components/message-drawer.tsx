import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useMemo, useState } from "react";
import { useQueryClient } from "react-query";

import { addMessage } from "../service/add-message";
import { Conversation } from "../types/conversation";
import { MessageCard } from "./message-card";

export function MessageDrawer({
  id: conversationId,
  messages,
  users,
}: Conversation) {
  const [directMessage, setDirectMessage] = useState("");

  const queryClient = useQueryClient();

  const reversed = useMemo(() => messages.reverse(), [messages]);

  return (
    <Paper
      elevation={8}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        width: 300,
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
          {users.map(({ name }) => name).join(", ")}
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
        <Box
          display="flex"
          justifyContent="flex-end"
          style={{ cursor: "pointer" }}
        >
          <IconButton
            disabled={!directMessage}
            onClick={() => {
              addMessage(directMessage, conversationId);
              queryClient.invalidateQueries({ queryKey: "conversations" });
              setDirectMessage("");
            }}
          >
            <ArrowCircleUpIcon
              sx={{
                color: "white",
                borderRadius: 10,
                backgroundColor: directMessage
                  ? "rgb(0, 82, 204)"
                  : "lightgrey",
              }}
            />
          </IconButton>
        </Box>
      </Box>
    </Paper>
  );
}
