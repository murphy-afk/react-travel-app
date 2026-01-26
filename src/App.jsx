import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home.jsx";
import Travel from "./pages/Travels.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Travel />} path="/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
