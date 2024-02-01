import { Box } from "@mui/material";
import { useMemo } from "react";
import "./app.css";
import { getTweets } from "./get-tweets";

export function App() {
  const tweets = useMemo(() => getTweets(), []);

  return (
    <Box width={665}>
      <Box display="flex" padding={1} marginLeft={1} marginRight={1} paddingTop={2} paddingBottom={2} color="black" style={{ backgroundColor: "white", borderBottom: "1px solid lightgrey", fontWeight: 900}}>Home</Box>
      <Box display="flex" padding={1} height={70} marginLeft={1} marginBottom={1} marginRight={1} color="lightgrey" style={{ backgroundColor: "white" }}>What's Happening?</Box>
      {tweets.map((ele) => (
        <Box key={ele.id} margin={1} style={{ backgroundColor: "white" }}>
          <Box display="flex" alignItems="center" paddingLeft={1}>
          <Box color="black">
            {ele.name}
          </Box>
          <Box color="black" paddingLeft={2} >{ele.twitterHandle}</Box>
          <Box color="black" paddingLeft={2}>{ele.time}</Box>
          </Box>
          <Box display="flex" color="black" paddingLeft={1} paddingRight={1} justifyContent="flex-start" alignItems="center">{ele.message}</Box>
        </Box>
      ))}
    </Box>
  );
}
