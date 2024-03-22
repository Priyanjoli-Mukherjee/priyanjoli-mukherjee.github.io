import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useQueryClient } from "react-query";
import { useMemo, useState } from "react";
import { addTweet } from "./service/add-tweet";
import { TweetCard } from "./tweet-card";
import { useTweets } from "./hooks/use-tweets";
import { MessagesButton } from "./messages-button";
import SearchIcon from "@mui/icons-material/Search";

const SIDEBAR_WIDTH = 350;

export function App() {
  const tweets = useTweets();

  const [tweetMessage, setTweetMessage] = useState("");

  const [searchText, setSearchText] = useState("");

  const queryClient = useQueryClient();

  const filteredTweets = useMemo(
    () =>
      tweets.filter((tweet) =>
        tweet.message.toLowerCase().includes(searchText.toLowerCase()),
      ),
    [tweets, searchText],
  );

  return (
    <Box display="flex" justifyContent="center" width="100vw" height="100vh">
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        width="100%"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100vh"
          justifyContent="flex-start"
          width={SIDEBAR_WIDTH}
          marginLeft={4}
        >
          <TextField
            label="Search Twitter"
            variant="filled"
            value={searchText}
            sx={{ backgroundColor: "lightgray", borderRadius: 8, marginTop: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(evt) => setSearchText(evt.target.value)}
          >
            search
          </TextField>
          <Box
            marginTop={2}
            height="90%"
            sx={{ backgroundColor: "lightgray", borderRadius: 4 }}
          >
            <Box borderBottom="1px solid rgb(179, 179, 204)">
              <Typography
                variant="h6"
                padding={2}
                sx={{ fontWeight: 900, color: "black" }}
              >
                Trends For You
              </Typography>
            </Box>
          </Box>
        </Box>
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
          {filteredTweets.map((tweet) => (
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
        <Box height="100vh" width={SIDEBAR_WIDTH} />
        <MessagesButton />
      </Box>
    </Box>
  );
}
