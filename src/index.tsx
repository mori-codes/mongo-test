import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { MantineProvider } from "@mantine/core"
import { MongoProvider } from "./context/MongoContext"
import App from "./App"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <MongoProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </MongoProvider>
  </React.StrictMode>
)
