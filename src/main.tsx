import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Fragment, Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { HashRouter } from "react-router-dom";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

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
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>,
);
