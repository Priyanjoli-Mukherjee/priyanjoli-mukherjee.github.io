import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "./Priya Mukherjee portfolio resume.pdf";
import { Box } from "@mui/material";
import useMeasure from "react-use/lib/useMeasure";
import { useEffect, useMemo, useState } from "react";
import { debounce } from "../utils/callback-utils/debounce";

export function ResumePage() {
  const [ref, { width: measuredWidth }] = useMeasure();

  const [width, setWidth] = useState(measuredWidth);

  const setDebouncedWidth = useMemo(() => debounce(setWidth, 100), []);

  useEffect(() => {
    setDebouncedWidth(measuredWidth);
  }, [measuredWidth]);

  return (
    <Box display="flex" height="100vh" overflow="scroll" width="100%" ref={ref}>
      <Document
        file={resume}
        loading={
          <Box
            alignItems="center"
            display="flex"
            height="100vh"
            justifyContent="center"
            width="100vw"
          >
            Loading resume...
          </Box>
        }
        error={
          <Box
            alignItems="center"
            display="flex"
            height="100vh"
            justifyContent="center"
            width="100vw"
          >
            Unable to load PDF
          </Box>
        }
      >
        <Page pageNumber={1} width={width} />
      </Document>
    </Box>
  );
}
