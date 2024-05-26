"use client";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfWidth, setPdfWidth] = useState<number>(0);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onRenderSuccess(page: any) {
    if (page && page.originalWidth) {
      setPdfWidth(page.originalWidth);
    }
  }

  return (
    <div className="flex flex-col items-center p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">My Resume</h1>
      <a
        href="/EmmanuelSalcedoResume.pdf"
        download
        className="mb-4 bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Download PDF
      </a>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Document
          file="/EmmanuelSalcedoResume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <motion.div
              key={`page_${index + 1}`}
              className="mb-8 border-2 border-gray-300 p-4 flex justify-center"
              style={{
                width: pdfWidth ? `${pdfWidth + 40}px` : 'auto',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <Page
                pageNumber={index + 1}
                onRenderSuccess={onRenderSuccess}
              />
            </motion.div>
          ))}
        </Document>
      </motion.div>
    </div>
  );
};

export default Resume;
