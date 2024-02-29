import { Box, IconButton, Typography } from "@mui/material";
import { Tweet } from "./types/tweet";
import { formatDate } from "./date-utils/format-date";
import { deleteTweet } from "./service/delete-tweets";
import { useQueryClient } from "react-query";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

export function TweetCard({ id, message, time, name, twitterHandle }: Tweet) {
  const queryClient = useQueryClient();

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
          <IconButton color="primary">
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
        <Typography variant="body2">{message}</Typography>
      </Box>
    </Box>
  );
}
