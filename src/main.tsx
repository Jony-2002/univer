import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import StudentsPage from "./pages/StudentsPage";
import LecturesPage from "./pages/LecturesPage";
import GroupsPage from "./pages/GroupsPage";
import SubjectsPage from "./pages/SubjectsPage";
import SchedulesPage from "./pages/SchedulesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/students-page",
        element: <StudentsPage />,
      },
      {
        path: "/lectures-page",
        element: <LecturesPage />,
      },
      {
        path: "/groups-page",
        element: <GroupsPage />,
      },
      {
        path: "/subjects-page",
        element: <SubjectsPage />,
      },
      {
        path: "/schedules-page",
        element: <SchedulesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
