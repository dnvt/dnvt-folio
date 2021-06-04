import React, { useState, useEffect, createContext, useContext } from "react"

type DocumentSizeType = { height: number }
const DocumentSizeCtx = createContext<Partial<DocumentSizeType>>({ height: undefined })

export const DocumentSizeProvider: React.FC = ({ children }) => {
  // Initialize state with undefined width/height so server and client renders match
  const [documentSize, setDocumentSize] = useState<Partial<DocumentSizeType>>({ height: undefined })

  const body = document.body
  const html = document.documentElement
  const heightMax = Math.max(body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight)

  useEffect(() => {
    setDocumentSize({
      height: heightMax
    })
  }, [body.offsetHeight, body.scrollHeight, heightMax, html.clientHeight, html.offsetHeight, html.scrollHeight])

  return (
    <DocumentSizeCtx.Provider value={documentSize}>
      {children}
    </DocumentSizeCtx.Provider>
  )
}

export const useDocumentSize = () => {
  return useContext(DocumentSizeCtx)
}
