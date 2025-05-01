import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import resume from "./Priya Mukherjee resume.pdf";

export function ResumePage() {
  return (
    <Document file={resume}>
      <Page pageNumber={1} />
    </Document>
  );
}
