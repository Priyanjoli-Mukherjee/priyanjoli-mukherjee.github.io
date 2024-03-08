import { Box, Button, Typography } from "@mui/material";
import { useQueryClient } from "react-query";
import { useState } from "react";
import { addTweet } from "./service/add-tweet";
import { TweetCard } from "./tweet-card";
import { useTweets } from "./hooks/use-tweets";
import { MessagesButton } from "./messages-button";

export function App() {
  const tweets = useTweets();

  const [tweetMessage, setTweetMessage] = useState("");

  const queryClient = useQueryClient();

  return (
    <Box display="flex" justifyContent="center" width="100vw" height="100vh">
      <Box display="flex" alignItems="flex-end">
        <Box width={665} height="100vh" overflow="scroll">
          <Box
            display="flex"
            padding={1}
            marginLeft={1}
            marginRight={1}
            paddingTop={2}
            paddingBottom={2}
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid lightgrey",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 900, color: "black" }}>
              Home
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            padding={1}
            marginLeft={1}
            marginRight={1}
            style={{
              backgroundColor: "white",
              borderBottom: "10px solid lightgrey",
            }}
          >
            <textarea
              rows={3}
              placeholder="What's Happening?"
              value={tweetMessage}
              style={{
                backgroundColor: "white",
                border: "none",
                fontSize: 20,
                fontWeight: 400,
                color: "black",
              }}
              onChange={(evt) => setTweetMessage(evt.target.value)}
            />
            <Box
              marginTop={5}
              display="flex"
              justifyContent="space-between"
              marginRight={1}
            >
              <Box />
              <Button
                variant="contained"
                sx={{ height: 35, borderRadius: 4, marginBottom: 0.5 }}
                onClick={() => {
                  addTweet(tweetMessage);
                  queryClient.invalidateQueries({ queryKey: "tweets" });
                  setTweetMessage("");
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 800 }}>
                  Tweet
                </Typography>
              </Button>
            </Box>
          </Box>
          {tweets.map((tweet) => (
            <TweetCard
              key={tweet.id}
              id={tweet.id}
              message={tweet.message}
              time={tweet.time}
              name={tweet.name}
              twitterHandle={tweet.twitterHandle}
            />
          ))}
        </Box>
        <MessagesButton />
      </Box>
    </Box>
  );
}
