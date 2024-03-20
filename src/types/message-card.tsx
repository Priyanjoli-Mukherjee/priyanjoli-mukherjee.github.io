import { Box, IconButton, Typography } from "@mui/material";
import { Message } from "./message";
import { User } from "./user";
import { Message as MessageStyle } from "../styles/message";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { deleteMessage } from "../service/delete-message";
import { useCurrentUser } from "../hooks/use-current-user";
import { useQueryClient } from "react-query";

interface Props {
  message: Message;
  user: User;
}

export function MessageCard({ message, user }: Props) {
  const currentUser = useCurrentUser();

  const queryClient = useQueryClient();

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
        <Typography variant="body2">{message.text}</Typography>
      </MessageStyle>
    </Box>
  );
}
