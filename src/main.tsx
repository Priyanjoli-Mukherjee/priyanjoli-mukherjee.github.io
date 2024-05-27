import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Fragment, Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TweetPage } from "./tweet-page.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Fragment />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" index Component={App} />
            <Route path="/:search" Component={App} />
            <Route path="/tweet/:tweetId" Component={TweetPage} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>,
);
