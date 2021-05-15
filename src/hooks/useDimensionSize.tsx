import React, { useState, useEffect, createContext, useContext } from "react";

type DocumentSizeType = { height: number }
const DocumentSizeCtx = createContext<Partial<DocumentSizeType>>({ height: undefined })

export const DocumentSizeProvider: React.FC = ({ children }) => {
  // Initialize state with undefined width/height so server and client renders match
  const [documentSize, setDocumentSize] = useState<Partial<DocumentSizeType>>({ height: undefined })

  useEffect(() => {
    setDocumentSize({
      height: Math.max(document.body.scrollHeight, document.body.offsetHeight,
        document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
    })
  }, [])

  return (
    <DocumentSizeCtx.Provider value={documentSize}>
      {children}
    </DocumentSizeCtx.Provider>
  );
};

export const useDocumentSize = () => {
  return useContext(DocumentSizeCtx)
};
