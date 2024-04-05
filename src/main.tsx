import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/dafault";
import { GlobalStyle } from "./styles/global";
import Home from "./pages/Home/index.tsx";
import History from "./pages/History/index.tsx";
import { DefaultLayout } from "./Layouts/DefaultLayout/index.tsx";
import { CyclesContextProvider } from "./contexts/CyclesContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "history", element: <History /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <RouterProvider router={router} />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
