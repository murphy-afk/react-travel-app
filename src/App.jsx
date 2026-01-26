import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<Home />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App