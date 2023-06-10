import React from "react";
import ReactDOM from "react-dom/client";
import "tailwindcss/tailwind.css";
import { router } from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./providers/AuthProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router} />
        </div>
        {/* </QueryClientProvider> */}
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
