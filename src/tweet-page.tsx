import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTweets } from "./hooks/use-tweets";
import { TweetCard } from "./tweet-card";
import { useState } from "react";
import { addTweet } from "./service/add-tweet";
import { useQueryClient } from "react-query";

export function TweetPage() {
  const { tweetId } = useParams();
  const tweets = useTweets();
  const queryClient = useQueryClient();

  const [replyMessage, setReplyMessage] = useState("");
  const tweet = tweets.find((tweet) => tweet.id === tweetId)!;

  return (
    <Box display="flex" justifyContent="center" width="100vw" paddingTop={6.25}>
      <Box display="flex" flexDirection="column" width={649}>
        <Box>
          <TweetCard tweet={tweet} />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          marginLeft={1}
          marginRight={1}
          sx={{ backgroundColor: "rgb(204, 245, 255)" }}
        >
          <textarea
            rows={3}
            placeholder="Tweet your reply"
            value={replyMessage}
            style={{
              backgroundColor: "white",
              border: "1px solid rgb(51, 214, 255)",
              fontSize: 20,
              fontWeight: 400,
              color: "black",
              borderRadius: 50,
              paddingTop: 30,
              paddingLeft: 30,
              margin: 5,
            }}
            onChange={(evt) => setReplyMessage(evt.target.value)}
          />
          <Box
            display="flex"
            justifyContent="flex-end"
            marginRight={1}
            paddingTop={2}
            paddingBottom={2}
          >
            <Button
              variant="contained"
              sx={{ height: 35, borderRadius: 4 }}
              onClick={() => {
                addTweet(replyMessage, tweetId);
                queryClient.invalidateQueries({ queryKey: "tweets" });
                setReplyMessage("");
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 800 }}>
                Tweet
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
