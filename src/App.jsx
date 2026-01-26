import { BrowserRouter, Route, Router } from "react-router-dom"
import MainLayout from "./layouts/mainLayout"

function App() {
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
        {/* <Route element={<Home/>} path="/"/> */}
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App