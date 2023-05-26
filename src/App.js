import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path='/home' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
