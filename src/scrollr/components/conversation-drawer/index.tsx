import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Popover, { PopoverProps } from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useMemo, useRef, useState } from "react";
import { useQueryClient } from "react-query";

import { useConversations } from "../../hooks/use-conversations";
import { useCurrentUser } from "../../hooks/use-current-user";
import { useUsers } from "../../hooks/use-users";
import { createConversation } from "../../service/create-conversation";
import { MessageDrawer } from "../message-drawer";
import { UserSearch } from "../user-search";

type Props = Pick<PopoverProps, "anchorEl" | "onClose" | "open">;

export function ConversationDrawer({ anchorEl, onClose, open }: Props) {
  const queryClient = useQueryClient();
  const conversations = useConversations();

  const currentUser = useCurrentUser();
  const users = useUsers();

  const [selectedConversationId, setSelectedConversationId] =
    useState<string>();
  const [searchTwitterHandle, setSearchTwitterHandle] = useState<string>();

  const anchor = useRef<SVGSVGElement | null>(null);

  const selectedConvo = useMemo(
    () =>
      conversations.find(
        (conversation) => conversation.id === selectedConversationId,
      ),
    [conversations, selectedConversationId],
  );

  async function createNewConversation() {
    if (searchTwitterHandle) {
      if (
        !conversations.find((conversation) =>
          conversation.users.find(
            (user) => user.twitterHandle === searchTwitterHandle,
          ),
        )
      ) {
        const user = users.find(
          ({ twitterHandle }) => twitterHandle === searchTwitterHandle,
        );
        if (user) {
          const conversation = await createConversation([user, currentUser]);
          setSelectedConversationId(conversation?.id);
          queryClient.invalidateQueries({ queryKey: "conversations" });
        }
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
            onClose={() => setSelectedConversationId(undefined)}
          >
            <MessageDrawer {...selectedConvo} />
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
                key={conversation.id}
                sx={{
                  backgroundColor:
                    conversation.id === selectedConvo?.id
                      ? "rgb(179, 224, 255)"
                      : "none",
                  paddingLeft: 2,
                  cursor: "pointer",
                }}
                onClick={() => setSelectedConversationId(conversation.id)}
              >
                <Box display="flex" flexDirection="column">
                  <Typography variant="body2">
                    {conversation.users
                      .filter(
                        (user) =>
                          user.twitterHandle !== currentUser.twitterHandle,
                      )
                      .map(({ name }) => name)
                      .join(", ")}
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
