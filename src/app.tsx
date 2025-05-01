import { useFeatureFlag } from "./hooks/use-feature-flag";
import { FeatureFlag } from "./types/feature-flag";
import { Scrollr } from "./scrollr";
import { Route, Routes } from "react-router-dom";
import { TweetPage } from "./scrollr/tweet-page";
import { Home } from "./home";
import { Box } from "@mui/material";
import { Navbar } from "./navbar";
import { ResumePage } from "./resume-page";

export function App() {
  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return !isMultiPageEnabled ? (
    <Routes>
      <Route path="/" index Component={Scrollr} />
      <Route path="/:search" Component={Scrollr} />
      <Route path="/tweet/:tweetId" Component={TweetPage} />
    </Routes>
  ) : (
    <Box display="flex" width="100vw">
      <Box flex="1 1" overflow="hidden" position="relative">
        <Routes>
          <Route path="/scrollr" Component={Scrollr} />
          <Route path="/scrollr/:search" Component={Scrollr} />
          <Route path="/scrollr/tweet/:tweetId" Component={TweetPage} />
          <Route path="/resume" Component={ResumePage} />
          <Route path="/" index Component={Home} />
        </Routes>
      </Box>
      <Navbar />
    </Box>
  );
}
