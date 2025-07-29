import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover, { PopoverProps } from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useMemo, useRef, useState } from "react";
import { useQueryClient } from "react-query";

import { useConversations } from "../../hooks/use-conversations";
import { addConversation } from "../../service/add-conversation";
import { MessageDrawer } from "../message-drawer";
import { UserSearch } from "../user-search";

type Props = Pick<PopoverProps, "anchorEl" | "onClose" | "open">;

export function ConversationDrawer({ anchorEl, onClose, open }: Props) {
  const queryClient = useQueryClient();
  const conversations = useConversations();

  const [selectedTwitterHandle, setSelectedTwitterHandle] = useState<string>();
  const [searchTwitterHandle, setSearchTwitterHandle] = useState<string>();

  const anchor = useRef<SVGSVGElement | null>(null);

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
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      transformOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Box display="flex">
        {selectedConvo && (
          <Popover
            anchorEl={anchor.current}
            open
            anchorOrigin={{ vertical: "bottom", horizontal: -4 }}
            transformOrigin={{ vertical: "bottom", horizontal: "right" }}
            onClose={() => setSelectedTwitterHandle(undefined)}
          >
            <MessageDrawer
              messages={selectedConvo.messages}
              user={selectedConvo.user}
            />
          </Popover>
        )}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          ref={anchor}
        >
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
    </Popover>
  );
}
