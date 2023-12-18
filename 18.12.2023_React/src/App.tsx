import './App.css'
//import Homepage from "./pages/Homepage";
//import About from "./pages/About";
import {
    BrowserRouter as Router,
    Route as Route,
    Routes as Routes
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {routes} from "./helpers/routing.tsx";

function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
            {routes.map((route) => (
                <Route
                    key = {route.path}
                    path = {route.path}
                    element = {route.element}
                />
            ))}
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
