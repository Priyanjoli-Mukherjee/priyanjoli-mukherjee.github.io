import { Box, IconButton, Typography } from "@mui/material";
import { Conversation } from "./types/conversation";
import { useCurrentUser } from "./hooks/use-current-user";
import { useState } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { addMessage } from "./service/add-message";
import { useQueryClient } from "react-query";
import { Message } from "./styles/message";
import { deleteMessage } from "./service/delete-message";

export function MessageDrawer({ messages, user }: Conversation) {
  const currentUser = useCurrentUser();

  const [directMessage, setDirectMessage] = useState("");

  const queryClient = useQueryClient();

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
          <Box
            key={message.id}
            display="flex"
            justifyContent={
              message.twitterHandle === currentUser.twitterHandle
                ? "flex-end"
                : "flex-start"
            }
            width="100%"
          >
            <Message
              border="1px solid lightgrey"
              margin={0.5}
              padding={1}
              borderRadius={2}
              width={125}
              sx={{
                backgroundColor:
                  message.twitterHandle === currentUser.twitterHandle
                    ? "rgb(65, 105, 225)"
                    : "green",
                color: "white",
              }}
            >
              <Box
                id={
                  message.twitterHandle === currentUser.twitterHandle
                    ? "actions"
                    : ""
                }
                display="flex"
                justifyContent="flex-end"
                height={15}
                visibility="hidden"
                sx={{ cursor: "pointer" }}
              >
                <IconButton>
                  <EditIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    deleteMessage(message.id, user.twitterHandle);
                    queryClient.invalidateQueries({
                      queryKey: "conversations",
                    });
                  }}
                >
                  <DeleteOutlineIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </Box>
              <Typography variant="body2">{message.message}</Typography>
            </Message>
          </Box>
        ))}
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
