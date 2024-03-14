import { Box, Typography } from "@mui/material";
import { Conversation } from "./types/conversation";
import { useCurrentUser } from "./hooks/use-current-user";

export function MessageDrawer({ messages, user }: Conversation) {
  const currentUser = useCurrentUser();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height={300}
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
                    : "green",
                color: "white",
              }}
            >
              <Typography variant="body2">{message.message}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
