import { Box, Typography } from "@mui/material";
import { Message } from "../types/message";
import { useCurrentUser } from "../hooks/use-current-user";

interface Props {
  message: Message;
}

export function MessageCard({ message }: Props) {
  const currentUser = useCurrentUser();

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
      <Box
        border="1px solid lightgrey"
        margin={0.5}
        padding={1}
        borderRadius={2}
        width={125}
        sx={{
          backgroundColor:
            message.twitterHandle === currentUser.twitterHandle
              ? "rgb(65, 105, 225)"
              : "rgb(179, 224, 255)",
          color:
            message.twitterHandle === currentUser.twitterHandle
              ? "white"
              : "black",
        }}
      >
        <Typography variant="body2">{message.text}</Typography>
      </Box>
    </Box>
  );
}
