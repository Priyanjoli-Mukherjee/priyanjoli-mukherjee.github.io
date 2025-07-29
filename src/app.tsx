import Box from "@mui/material/Box";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingPage } from "./components/loading-page";
import { ContactPage } from "./contact-page";
import { EventMaster } from "./event-master";
import { EventPage } from "./event-master/components/event-page";
import { Home } from "./home";
import { Kanban } from "./kanban";
import { Navbar } from "./navbar";
import { ResumePage } from "./resume-page";
import { Scrollr } from "./scrollr";
import { TweetPage } from "./scrollr/components/tweet-page";

export function App() {
  return (
    <Box display="flex" width="100vw">
      <Box
        flex="1 1"
        height="100vh"
        position="relative"
        sx={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/scrollr" Component={Scrollr} />
            <Route path="/scrollr/:search" Component={Scrollr} />
            <Route path="/scrollr/tweet/:tweetId" Component={TweetPage} />
            <Route path="/resume" Component={ResumePage} />
            <Route path="/contact" Component={ContactPage} />
            <Route path="/event-master" Component={EventMaster} />
            <Route path="/event-master/search" Component={EventPage} />
            <Route path="/kanban" Component={Kanban} />
            <Route path="/" index Component={Home} />
          </Routes>
        </Suspense>
      </Box>
      <Navbar />
    </Box>
  );
}
