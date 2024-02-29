import { Box, Button, Typography } from "@mui/material";
import "./app.css";
import { getTweets } from "./service/get-tweets";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";
import { addTweet } from "./service/add-tweets";
import { TweetCard } from "./tweet-card";

export function App() {
  const { data } = useQuery("tweets", getTweets);

  const [tweetMessage, setTweetMessage] = useState("");

  const queryClient = useQueryClient();

  return (
    <Box width={665}>
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
        <input
          type="text"
          placeholder="What's Happening?"
          value={tweetMessage}
          style={{
            backgroundColor: "white",
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
      {data!.map((tweet) => (
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
  );
}
