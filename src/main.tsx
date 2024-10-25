import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/reviews/layout.tsx";
import routes from "./util/routes.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      ...routes.map((router) => {
        const Comp = router.screen;
        return {
          path: router.path,
          element: <Comp />,
        };
      }),
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
