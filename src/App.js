import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Weather from './components/Weather';
import PollutionDetails from './components/PollutionDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Weather />} />
            <Route path="/pollution-details" element={<PollutionDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
