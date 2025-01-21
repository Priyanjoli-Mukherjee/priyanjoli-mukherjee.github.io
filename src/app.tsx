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
import { getTrendDictionary } from "./hashtag-utils/get-trend-dictionary";
import { Dictionary } from "./types/dictionary";
import { Tweet } from "./types/tweet";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HomeButton } from "./home-button";

const SIDEBAR_WIDTH = 500;

export function App() {
  const { search } = useParams();

  const navigate = useNavigate();

  const tweets = useTweets();

  const [tweetMessage, setTweetMessage] = useState("");

  const searchText = decodeURIComponent(search ?? "");

  const queryClient = useQueryClient();

  const filteredTweets = useMemo(() => {
    if (searchText[0] !== "@") {
      return tweets.filter((tweet) =>
        tweet.message.toLowerCase().includes(searchText.toLowerCase()),
      );
    } else {
      return tweets.filter((tweet) =>
        tweet.twitterHandle.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
  }, [tweets, searchText]);

  const trends: Dictionary<number> = useMemo(
    () => getTrendDictionary(tweets),
    [tweets],
  );

  const sortedTrends = useMemo(
    () =>
      Object.keys(trends).sort(
        (trend1, trend2) => trends[trend2] - trends[trend1],
      ),
    [trends],
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
            label="Search Scrollr"
            variant="filled"
            value={searchText}
            sx={{ backgroundColor: "lightgray", borderRadius: 8, marginTop: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(evt) =>
              navigate(`/${encodeURIComponent(evt.target.value)}`)
            }
          >
            search
          </TextField>
          <Box
            marginTop={2}
            height="100%"
            overflow="scroll"
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
            {sortedTrends.map((trend) => (
              <Box
                key={trend}
                display="flex"
                borderBottom="1px solid rgb(179, 179, 204)"
              >
                <Link
                  to={`/${encodeURIComponent(trend)}`}
                  style={{ width: "100%" }}
                >
                  <Button
                    sx={{
                      width: "100%",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      paddingLeft={2}
                      paddingBottom={2}
                      paddingTop={2}
                    >
                      <Box display="flex" justifyContent="flex-start">
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 800, color: "black" }}
                        >
                          {trend}
                        </Typography>
                      </Box>
                      <Box display="flex" justifyContent="flex-start">
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 400, color: "black" }}
                        >
                          {`${trends[trend]}${"K Tweets"}`}
                        </Typography>
                      </Box>
                    </Box>
                  </Button>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box width={1200} height="100vh" overflow="scroll">
          <Box
            display="flex"
            padding={1}
            marginLeft={1}
            marginRight={1}
            paddingTop={2}
            paddingBottom={2}
            sx={{
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
            sx={{
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
                fontSize: 16,
                fontWeight: 400,
                color: "black",
                paddingTop: 5,
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
                  Post
                </Typography>
              </Button>
            </Box>
          </Box>
          {filteredTweets?.map((tweet: Tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))}
        </Box>
        <Box height="100vh" width={300}>
          <HomeButton />
          <MessagesButton />
        </Box>
      </Box>
    </Box>
  );
}
