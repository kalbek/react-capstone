import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Pollutants from "./pages/Pollutants";

function App() {
  console.log("hey there");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/pollution-details" element={<Pollutants />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
