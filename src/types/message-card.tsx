import { Box, IconButton, Typography } from "@mui/material";
import { Message } from "./message";
import { User } from "./user";
import { Message as MessageStyle } from "../styles/message";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { deleteMessage } from "../service/delete-message";
import { useCurrentUser } from "../hooks/use-current-user";
import { useQueryClient } from "react-query";
import { useState } from "react";
import { editMessage } from "../service/edit-message";

interface Props {
  message: Message;
  user: User;
}

export function MessageCard({ message, user }: Props) {
  const currentUser = useCurrentUser();

  const queryClient = useQueryClient();

  const [editedMessage, setEditedMessage] = useState(message.text);

  const [isEditButtonClickable, setEditButtonClickable] = useState(false);

  function toggle() {
    setEditButtonClickable(!isEditButtonClickable);
  }

  return (
    <Box
      display="flex"
      justifyContent={
        message.twitterHandle === currentUser.twitterHandle
          ? "flex-end"
          : "flex-start"
      }
      width="100%"
    >
      <MessageStyle
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
            message.twitterHandle === currentUser.twitterHandle ? "actions" : ""
          }
          display="flex"
          justifyContent="flex-end"
          height={15}
          visibility="hidden"
          marginBottom={0.5}
          sx={{ cursor: "pointer" }}
        >
          <IconButton onClick={toggle}>
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
        {isEditButtonClickable ? (
          <Box width="100%" paddingBottom={1}>
            <textarea
              rows={3}
              value={editedMessage}
              style={{
                backgroundColor: "white",
                fontSize: 20,
                fontWeight: 400,
                color: "black",
                width: "98%",
              }}
              onBlur={() => {
                editMessage(message.id, user.twitterHandle, message.text);
                queryClient.invalidateQueries({ queryKey: "tweets" });
                setEditButtonClickable(false);
              }}
              onChange={(evt) => setEditedMessage(evt.target.value)}
            />
          </Box>
        ) : (
          <Typography variant="body2">{editedMessage}</Typography>
        )}
      </MessageStyle>
    </Box>
  );
}
