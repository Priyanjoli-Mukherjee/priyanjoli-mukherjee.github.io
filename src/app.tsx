import { useFeatureFlag } from "./hooks/use-feature-flag";
import { FeatureFlag } from "./types/feature-flag";
import { Scrollr } from "./scrollr";
import { Route, Routes } from "react-router-dom";
import { TweetPage } from "./scrollr/tweet-page";
import { Home } from "./home";

export function App() {
  const isMultiPageEnabled = useFeatureFlag(FeatureFlag.MULTI_PAGE_ENABLED);

  return !isMultiPageEnabled ? (
    <Routes>
      <Route path="/" index Component={Scrollr} />
      <Route path="/:search" Component={Scrollr} />
      <Route path="/tweet/:tweetId" Component={TweetPage} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/scrollr" Component={Scrollr} />
      <Route path="/scrollr/:search" Component={Scrollr} />
      <Route path="/scrollr/tweet/:tweetId" Component={TweetPage} />
      <Route path="/" index Component={Home} />
    </Routes>
  );
}
