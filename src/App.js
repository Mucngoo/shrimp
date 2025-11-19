import './index.css';
import NewCar from './pages/NewCar';
import UsedCar from './pages/UsedCar';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/newcar" element={<NewCar />} />
          <Route path="/usedcar" element={<UsedCar />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
