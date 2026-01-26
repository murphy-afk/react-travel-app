import { BrowserRouter, Route, Router } from "react-router"
import MainLayout from "./layouts/mainLayout"

function App() {
  <BrowserRouter>
    <Router>
      <Route element={<MainLayout/>}>
        {/* <Route element={<Home/>} path="/"/> */}
      </Route>
    </Router>
  </BrowserRouter>
}

export default App