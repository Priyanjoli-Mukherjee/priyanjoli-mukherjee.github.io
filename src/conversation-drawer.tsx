import { useMemo, useState } from "react";
import { useConversations } from "./hooks/use-conversations";
import { Box, Button, Typography } from "@mui/material";
import { MessageDrawer } from "./message-drawer";
import { UserSearch } from "./components/user-search";
import { addConversation } from "./service/add-conversation";
import { useQueryClient } from "react-query";

export function ConversationDrawer() {
  const queryClient = useQueryClient();
  const conversations = useConversations();

  const [selectedTwitterHandle, setSelectedTwitterHandle] = useState<string>();
  const [searchTwitterHandle, setSearchTwitterHandle] = useState<string>();

  const selectedConvo = useMemo(
    () =>
      conversations.find(
        (conversation) =>
          conversation.user.twitterHandle === selectedTwitterHandle,
      ),
    [conversations, selectedTwitterHandle],
  );

  function createNewConversation() {
    if (searchTwitterHandle) {
      setSelectedTwitterHandle(searchTwitterHandle);
      if (
        !conversations.find(
          ({ user }) => user.twitterHandle === searchTwitterHandle,
        )
      ) {
        addConversation(searchTwitterHandle);
        queryClient.invalidateQueries({ queryKey: "conversations" });
      }
      setSearchTwitterHandle(undefined);
    }
  }

  return (
    <Box display="flex">
      {selectedConvo && (
        <MessageDrawer
          messages={selectedConvo.messages}
          user={selectedConvo.user}
        />
      )}
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box
          borderBottom="1px solid black"
          paddingBottom={1}
          paddingTop={2}
          paddingRight={2}
          paddingLeft={2}
        >
          <Typography variant="body1" sx={{ fontWeight: 900 }}>
            Conversations
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          paddingBottom={1}
          paddingTop={1}
        >
          {conversations.map((conversation) => (
            <Box
              key={conversation.user.twitterHandle}
              sx={{
                backgroundColor:
                  conversation.user.twitterHandle ===
                  selectedConvo?.user.twitterHandle
                    ? "rgb(179, 224, 255)"
                    : "none",
                paddingLeft: 2,
                cursor: "pointer",
              }}
              onClick={() =>
                setSelectedTwitterHandle(conversation.user.twitterHandle)
              }
            >
              <Box display="flex" flexDirection="column">
                <Typography variant="body2">
                  {conversation.user.name}
                </Typography>
              </Box>
            </Box>
          ))}
          <Box alignItems="center" display="flex">
            <UserSearch
              twitterHandle={searchTwitterHandle}
              onChange={setSearchTwitterHandle}
            />
            <Button
              variant="contained"
              sx={{ marginRight: 2 }}
              onClick={createNewConversation}
            >
              Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
