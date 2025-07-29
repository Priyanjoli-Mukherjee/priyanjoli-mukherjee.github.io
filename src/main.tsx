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
import emailjs from "@emailjs/browser";
import { PUBLIC_KEY } from "./contact-page/constants/public-key.ts";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

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
