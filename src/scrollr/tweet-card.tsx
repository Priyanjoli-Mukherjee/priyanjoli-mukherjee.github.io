import { Box, Button, IconButton, Typography } from "@mui/material";
import { Tweet } from "../types/tweet";
import { formatDate } from "../date-utils/format-date";
import { deleteTweet } from "../service/delete-tweets";
import { useQueryClient } from "react-query";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CommentIcon from "@mui/icons-material/Comment";
import { useMemo, useState } from "react";
import { editTweet } from "../service/edit-tweets";
import { useCurrentUser } from "../hooks/use-current-user";
import { parseHashtags } from "../hashtag-utils/parse-hashtags";
import { Link } from "react-router-dom";
import { tweets } from "../service/tweets";
import { useFeatureFlag } from "../hooks/use-feature-flag";
import { FeatureFlag } from "../types/feature-flag";

interface Props {
  tweet: Tweet;
}

export function TweetCard({ tweet }: Props) {
  const { id, message, time, name, twitterHandle, image, replyingTo } = tweet;

  const replyingToTwitterHnadle = tweets.find(
    (tweet) => tweet.id === replyingTo,
  )?.twitterHandle;

  const queryClient = useQueryClient();

  const [editedMessage, setEditedMessage] = useState(message);

  const [isEditButtonClickable, setEditButtonClickable] = useState(false);

  const [isHovered, setHovered] = useState(false);

  function toggle() {
    setEditButtonClickable(!isEditButtonClickable);
  }

  const parsed = useMemo(() => parseHashtags(message), [message]);

  const currentUser = useCurrentUser();

  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return (
    <Box
      display="flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      marginLeft={1}
      marginRight={1}
      borderBottom="1px solid lightgrey"
      style={{ backgroundColor: "white" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={2}
      >
        <img src={image} width={60} height={60} style={{ borderRadius: 100 }} />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-between"
        marginLeft={2}
      >
        <Box display="flex" alignItems="center" width="100%">
          <Link
            to={`${isMultiPageEnabled ? "/scrollr" : ""}/${encodeURIComponent(twitterHandle)}`}
          >
            <Box
              color="black"
              sx={{ cursor: "pointer", "&:hover": { color: "blue" } }}
            >
              <Typography variant="body1" sx={{ fontWeight: 900 }}>
                {name}
              </Typography>
            </Box>
          </Link>
          <Link
            to={`${isMultiPageEnabled ? "/scrollr" : ""}/${encodeURIComponent(twitterHandle)}`}
          >
            <Box
              color="black"
              paddingLeft={2}
              sx={{ cursor: "pointer", "&:hover": { color: "blue" } }}
            >
              <Typography variant="body1">{twitterHandle}</Typography>
            </Box>
          </Link>
          <Box color="black" paddingLeft={2}>
            <Typography variant="body1">{formatDate(time)}</Typography>
          </Box>
          <Box
            display="flex"
            flexGrow={1}
            justifyContent="flex-end"
            height={40}
            alignItems="flex-start"
          >
            {isHovered &&
              (currentUser.twitterHandle === twitterHandle ? (
                <Box paddingRight={2}>
                  <IconButton color="primary" onClick={toggle}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <Link to={`${isMultiPageEnabled ? "/scrollr" : ""}/`}>
                    <IconButton
                      color="primary"
                      onClick={() => {
                        deleteTweet(id);
                        queryClient.invalidateQueries({ queryKey: "tweets" });
                      }}
                    >
                      <DeleteOutlineIcon fontSize="medium" />
                    </IconButton>
                  </Link>
                  <Link
                    to={`${isMultiPageEnabled ? "/scrollr" : ""}/tweet/${id}`}
                  >
                    <IconButton color="primary">
                      <OpenInNewIcon />
                    </IconButton>
                  </Link>
                </Box>
              ) : (
                <Box paddingRight={2}>
                  <Link
                    to={`${isMultiPageEnabled ? "/scrollr" : ""}/tweet/${id}`}
                  >
                    <IconButton color="primary">
                      <OpenInNewIcon />
                    </IconButton>
                  </Link>
                </Box>
              ))}
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          textAlign="start"
          color="black"
          paddingRight={2.5}
          paddingBottom={1}
          justifyContent="flex-start"
          alignItems="center"
          boxSizing="border-box"
          width="100%"
        >
          {replyingTo && (
            <Box width="100%" paddingBottom={0.5}>
              <Link
                to={`${isMultiPageEnabled ? "/scrollr" : ""}/tweet/${replyingTo}`}
              >
                <Typography variant="subtitle2" fontWeight={500}>
                  <span style={{ color: "rgb(133, 133, 173)" }}>
                    Replying To
                  </span>
                  <span style={{ color: "red", paddingLeft: 5 }}>
                    {replyingToTwitterHnadle}
                  </span>
                </Typography>
              </Link>
            </Box>
          )}
          {isEditButtonClickable ? (
            <Box
              paddingLeft={1}
              paddingBottom={1}
              paddingTop={1}
              width={"100%"}
            >
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
                marginTop={0.5}
              >
                <Box />
                <Button
                  variant="contained"
                  disabled={!editedMessage}
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
                    <Link
                      key={index}
                      to={`${isMultiPageEnabled ? "/scrollr" : ""}/${encodeURIComponent(text)}`}
                    >
                      <span style={{ color: "blue", cursor: "pointer" }}>
                        {text}
                      </span>
                    </Link>
                  ) : (
                    <span key={index}>{text}</span>
                  ),
                )}
              </Typography>
            </Box>
          )}
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Link to={`${isMultiPageEnabled ? "/scrollr" : ""}/tweet/${id}`}>
              <IconButton color="primary">
                <CommentIcon fontSize="small" />
              </IconButton>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
