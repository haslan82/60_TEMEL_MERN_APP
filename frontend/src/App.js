import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

<Routes>
  <Route path="/"  element={<Home />} />
  {/* <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} /> */}
</Routes>

      </BrowserRouter>
    </div>
  );
}


export default App;
