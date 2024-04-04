import Dashboard from "./pages/Dashboard.tsx";
import MedicalRecord from "./pages/MedicalRecord.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import Profile from "./pages/Profile.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />,
      <Route path="medical-record" element={<MedicalRecord />} />,
      <Route path="profile" element={<Profile />} />,
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
