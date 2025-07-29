import "./index.css";
import "react-pdf/dist/Page/TextLayer.css";

import emailjs from "@emailjs/browser";
import { ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Fragment, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { pdfjs } from "react-pdf";
import { QueryClient, QueryClientProvider } from "react-query";
import { HashRouter } from "react-router-dom";

import { App } from "./app.tsx";
import { PUBLIC_KEY } from "./contact-page/constants/public-key.ts";
import { theme } from "./theme.ts";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

emailjs.init({
  publicKey: PUBLIC_KEY,
});

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Suspense fallback={<Fragment />}>
          <HashRouter>
            <App />
          </HashRouter>
        </Suspense>
      </LocalizationProvider>
    </ThemeProvider>
  </QueryClientProvider>,
);
