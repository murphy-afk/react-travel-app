import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home.jsx";
import Travels from "./pages/Travels.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NotFound from "./pages/Notfound.jsx";
import { internalTrips, internalTravelers } from "./Data/data.js";
import { useState } from "react";

function App() {
  const [trips, SetTrips] = useState(internalTrips);
  const [travelers, setTravelers] = useState(internalTravelers);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home trips={trips} />} path="/" />
          <Route
            element={<Travels trips={trips} travelers={travelers} setTravelers={setTravelers} />}
            path="/travels/:id"
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
