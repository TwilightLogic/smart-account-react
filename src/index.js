import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ChakraProvider } from "@chakra-ui/react"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SendPage from "./pages/SendPage"
import ReceivePage from "./pages/ReceivePage"
import FunctionPage from "./pages/FunctionPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
    children: [
      { path: "/home/send", element: <SendPage /> },
      { path: "/home/receive", element: <ReceivePage /> },
      { path: "/home/function", element: <FunctionPage /> },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </ChakraProvider>
)
