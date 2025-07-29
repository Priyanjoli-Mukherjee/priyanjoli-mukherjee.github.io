import { Box, Button, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useTweets } from "../hooks/use-tweets";
import { TweetCard } from "./tweet-card";
import { useState } from "react";
import { addTweet } from "../service/add-tweet";
import { useQueryClient } from "react-query";
import { BackButton } from "./back-button";
import { MessagesButton } from "./messages-button";

export function TweetPage() {
  const { tweetId } = useParams();
  const tweets = useTweets();
  const queryClient = useQueryClient();

  const [replyMessage, setReplyMessage] = useState("");

  const tweet = tweets.find((tweet) => tweet.id === tweetId)!;
  const tweetReplies = tweets.filter((tweet) => tweet.replyingTo === tweetId);

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
          paddingTop={1}
          sx={{
            backgroundColor: "rgb(217, 217, 217)",
            borderBottom: "1px solid lightgrey",
          }}
        >
          <textarea
            rows={2}
            placeholder="Post your reply"
            value={replyMessage}
            style={{
              backgroundColor: "white",
              border: "1px solid rgb(217, 217, 217)",
              fontSize: 16,
              fontWeight: 400,
              color: "black",
              borderRadius: 50,
              paddingTop: 15,
              paddingLeft: 20,
              marginLeft: 8,
              marginRight: 8,
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
              disabled={!replyMessage}
              sx={{ height: 35, borderRadius: 4 }}
              onClick={() => {
                addTweet(replyMessage, tweetId);
                queryClient.invalidateQueries({ queryKey: "tweets" });
                setReplyMessage("");
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 800 }}>
                Post
              </Typography>
            </Button>
          </Box>
        </Box>
        {tweetReplies.map((tweetReply) => (
          <TweetCard key={tweetReply.id} tweet={tweetReply} />
        ))}
      </Box>
      <BackButton />
      <MessagesButton />
    </Box>
  );
}
