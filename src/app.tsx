import { Box, Paper } from "@mui/material";
import { useMemo } from "react";
import "./app.css";
import { getTweets } from "./get-tweets";

export function App() {
  const tweets = useMemo(() => getTweets(), []);

  return (
    <>
      <Box>Home</Box>
      <Box>What's Happening?</Box>
      {tweets.map((ele) => (
        <Box key={ele.id} width={665}>
          <Paper elevation={5} style={{ height: 100 }}>
            {ele.name}
          </Paper>
          <Paper elevation={5}>{ele.twitterHandle}</Paper>
          <Paper elevation={5}>{ele.time}</Paper>
          <Paper elevation={5}>{ele.message}</Paper>
        </Box>
      ))}
    </>
  );
}
