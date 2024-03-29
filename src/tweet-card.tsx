import { Box, Button, IconButton, Typography } from "@mui/material";
import { Tweet } from "./types/tweet";
import { formatDate } from "./date-utils/format-date";
import { deleteTweet } from "./service/delete-tweets";
import { useQueryClient } from "react-query";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useMemo, useState } from "react";
import { editTweet } from "./service/edit-tweets";
import { useCurrentUser } from "./hooks/use-current-user";
import { parseHashtags } from "./hashtag-utils/parse-hashtags";

interface Props {
  tweet: Tweet;
  onFilter(searchText: string): void;
}

export function TweetCard({ tweet, onFilter }: Props) {
  const { id, message, time, name, twitterHandle } = tweet;

  const queryClient = useQueryClient();

  const [editedMessage, setEditedMessage] = useState(message);

  const [isEditButtonClickable, setEditButtonClickable] = useState(false);

  const [isHovered, setHovered] = useState(false);

  function toggle() {
    setEditButtonClickable(!isEditButtonClickable);
  }

  const parsed = useMemo(() => parseHashtags(message), [message]);

  const currentUser = useCurrentUser();

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      marginLeft={1}
      marginRight={1}
      borderBottom="1px solid lightgrey"
      style={{ backgroundColor: "white" }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Box display="flex" alignItems="center" paddingLeft={1} width="100%">
          <Box color="black">
            <Typography variant="body1" sx={{ fontWeight: 900 }}>
              {name}
            </Typography>
          </Box>
          <Box
            color="black"
            paddingLeft={2}
            sx={{ cursor: "pointer", "&:hover": { color: "blue" } }}
            onClick={() => onFilter(twitterHandle)}
          >
            <Typography variant="body1">{twitterHandle}</Typography>
          </Box>
          <Box color="black" paddingLeft={2}>
            <Typography variant="body1">{formatDate(time)}</Typography>
          </Box>
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            alignItems="flex-start"
          >
            {isHovered && currentUser.twitterHandle === twitterHandle ? (
              <Box height={36} paddingRight={0.5}>
                <IconButton color="primary" onClick={toggle}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => {
                    deleteTweet(id);
                    queryClient.invalidateQueries({ queryKey: "tweets" });
                  }}
                >
                  <DeleteOutlineIcon fontSize="medium" />
                </IconButton>
              </Box>
            ) : (
              <Box height={36} paddingRight={0.5} />
            )}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="start"
        color="black"
        paddingLeft={3}
        paddingRight={1}
        paddingBottom={1}
        justifyContent="flex-start"
        alignItems="center"
        width={639}
        boxSizing="border-box"
      >
        {isEditButtonClickable ? (
          <Box paddingLeft={1} paddingBottom={1}>
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
              onChange={(evt) => setEditedMessage(evt.target.value)}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              paddingRight={0.5}
            >
              <Box />
              <Button
                variant="contained"
                sx={{ height: 30, borderRadius: 4, marginBottom: 0.5 }}
                onClick={() => {
                  editTweet(id, editedMessage);
                  queryClient.invalidateQueries({ queryKey: "tweets" });
                  setEditButtonClickable(false);
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  Submit
                </Typography>
              </Button>
            </Box>
          </Box>
        ) : (
          <Box width="100%">
            <Typography variant="body2">
              {parsed.map((text, index) =>
                text[0] === "#" ? (
                  <span
                    key={index}
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => onFilter(text)}
                  >
                    {text}
                  </span>
                ) : (
                  <span key={index}>{text}</span>
                ),
              )}
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
