import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home.jsx";
import Travels from "./pages/Travels.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NotFound from "./pages/Notfound.jsx";
import { internalTrips, internalTravelers } from "./Data/data.js";
import AddTrips from "./pages/AddTrips.jsx";
import { useState } from "react";

function App() {
  const [trips, setTrips] = useState(internalTrips);
  const [travelers, setTravelers] = useState(internalTravelers);

  const addTrip = (newTrip) => {
    setTrips((trip) => [newTrip, ...trip]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home trips={trips} />} path="/" />
          <Route
            element={
              <Travels
                trips={trips}
                travelers={travelers}
                setTravelers={setTravelers}
              />
            }
            path="/travels/:id"
          />
          <Route path="/addtrips" element={<AddTrips onAddTrip={addTrip} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
