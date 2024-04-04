import Dashboard from "./pages/Dashboard.tsx";
import MedicalRecord from "./pages/MedicalRecord.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />,
      <Route path="medical-record" element={<MedicalRecord />} />,
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
