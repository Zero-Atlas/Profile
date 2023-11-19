import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import Project from "./Pages/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "project/:projectId", element: <Project /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
