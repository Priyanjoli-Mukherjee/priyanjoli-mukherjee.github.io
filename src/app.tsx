import { Box, Paper } from "@mui/material";
import "./app.css";

export function App() {
 const arr = [{name: "Ethel", twitterHandle: "@oldtimerethel", time: 56, message: "What's going on?"}, {name: "JimBob", twitterHandle:"@jimbobWW2", time: 2, message: "What to do?"}, {name: "Gertrude", twitterHandle: "Gertrude1920", time: 48, message: "Is the war over?"}];
 
 return (
    <>
    <Box>
      Home
    </Box>
    <Box>
      What's Happening?
    </Box>
      {arr.map((ele) => (
        <Box width={665}>
        <Paper elevation={5} style={{height: 100}}>
          {ele.name}
        </Paper>
        <Paper elevation={5}>
          {ele.twitterHandle}
        </Paper>
        <Paper elevation={5}>
          {ele.time}
        </Paper>
        <Paper elevation={5}>
          {ele.message}
        </Paper>
      </Box>
      ))}
    </>
  );
}

