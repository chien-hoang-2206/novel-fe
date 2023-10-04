import { RouterProvider } from "react-router-dom";
import React from "react";

import { AuthProvider } from "./context/auth.context";
import Router from "./router";

// , { router } <RouterProvider router={router}/ >

export default function App() {
  return (
    <AuthProvider>
      {/* <MessageProvider> */}
        <Router />
      {/* </MessageProvider> */}
    </AuthProvider>
  );
}
