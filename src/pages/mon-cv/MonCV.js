import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import pdf from "./mon-cv.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export default function MonCV() {
  return (
    <div>
      <Document file={pdf}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
