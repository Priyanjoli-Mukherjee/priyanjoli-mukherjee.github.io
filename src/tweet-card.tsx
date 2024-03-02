import { Box, Button, IconButton, Typography } from "@mui/material";
import { Tweet } from "./types/tweet";
import { formatDate } from "./date-utils/format-date";
import { deleteTweet } from "./service/delete-tweets";
import { useQueryClient } from "react-query";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { editTweet } from "./service/edit-tweets";

export function TweetCard({ id, message, time, name, twitterHandle }: Tweet) {
  const queryClient = useQueryClient();

  const [editedMessage, setEditedMessage] = useState(message);

  const [isEditButtonClickable, setEditButtonClickable] = useState(false);

  function toggle() {
    setEditButtonClickable(!isEditButtonClickable);
  }

  return (
    <Box
      marginLeft={1}
      marginRight={1}
      borderBottom="1px solid lightgrey"
      style={{ backgroundColor: "white" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" paddingLeft={1}>
          <Box color="black">
            <Typography variant="body1" sx={{ fontWeight: 900 }}>
              {name}
            </Typography>
          </Box>
          <Box color="black" paddingLeft={2}>
            <Typography variant="body1">{twitterHandle}</Typography>
          </Box>
          <Box color="black" paddingLeft={2}>
            <Typography variant="body1">{formatDate(time)}</Typography>
          </Box>
        </Box>
        <Box paddingRight={0.5}>
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
      </Box>
      <Box
        display="flex"
        textAlign="start"
        color="black"
        paddingLeft={1}
        paddingRight={1}
        paddingBottom={1}
        justifyContent="flex-start"
        alignItems="center"
      >
        {isEditButtonClickable ? (
          <Box width={665} paddingBottom={1}>
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
                  editTweet(id, message);
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
          <Typography variant="body2">{editedMessage}</Typography>
        )}
      </Box>
    </Box>
  );
}
