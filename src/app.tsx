import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./Pages/create-trip"
import { TripDetailsPage } from "./Pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripsId",
    element: <TripDetailsPage />
  },
]);

export function App() {
  return   <RouterProvider router={router} />
}