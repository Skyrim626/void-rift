import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  /* {
    path: "/products",
    element: <Products />
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  }, */
]);

// Export router
export default router;
