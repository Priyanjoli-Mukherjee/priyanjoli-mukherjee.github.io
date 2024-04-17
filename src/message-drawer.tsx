import { Box, IconButton, Typography } from "@mui/material";
import { Conversation } from "./types/conversation";
import { useCallback, useEffect, useRef, useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { addMessage } from "./service/add-message";
import { useQueryClient } from "react-query";
import { MessageCard } from "./message-card";

export function MessageDrawer({ messages, user }: Conversation) {
  const [directMessage, setDirectMessage] = useState("");

  const queryClient = useQueryClient();

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      height={400}
      width={300}
      right={175}
      bottom={30}
      position="fixed"
      sx={{ backgroundColor: "white" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        padding={1}
        sx={{ backgroundColor: "rgb(179, 179, 179)" }}
      >
        <Typography variant="body1" sx={{ fontWeight: 900 }}>
          {user.name}
        </Typography>
      </Box>
      <Box
        overflow="scroll"
        paddingRight={2}
        paddingLeft={2}
        sx={{ backgroundColor: "rgb(77, 77, 77)" }}
      >
        {messages.map((message) => (
          <MessageCard key={message.id} message={message} user={user} />
        ))}
        <Box ref={messagesEndRef} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: "white" }}
      >
        <textarea
          rows={2}
          placeholder="message"
          value={directMessage}
          style={{
            border: "none",
            backgroundColor: "white",
            fontSize: 15,
            fontWeight: 200,
            paddingTop: 4,
            color: "black",
          }}
          onChange={(evt) => setDirectMessage(evt.target.value)}
        />
        <Box display="flex" justifyContent="flex-end">
          <IconButton
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
    </Box>
  );
}
