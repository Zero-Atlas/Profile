import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Layout/RootLayout";
import Project from "./Pages/Project";
import ErrorPage from "./Pages/Error";
import Info from "./Pages/Content/Info";
import Background from "./Pages/Content/Background";
import Certificate from "./Pages/Content/Certificate";
import Projects from "./Pages/Content/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home />,
        children: [
          { index: true, element: <Info /> },
          { path: "background", element: <Background /> },
          { path: "certificate", element: <Certificate /> },
          { path: "projects", element: <Projects /> },
        ],
      },
      { path: "project/:projectId", element: <Project /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
