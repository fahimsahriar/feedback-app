import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Header from "./components/header"

function App()
{
    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </Router>
    )
}
export default App