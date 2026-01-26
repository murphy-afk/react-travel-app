import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout";
import Home from "./pages/Home.jsx";
import Travels from "./pages/Travels.jsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NotFound from "./pages/Notfound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/" />
          <Route element={<Travels />} path="/travels/:id" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
