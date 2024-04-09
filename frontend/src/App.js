// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AddFood from './components/Food Ordering/Admin/Add Food/AddFood';
import Foods from './components/Food Ordering/Admin//Food/Foods';


function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* Admin-Food Adding */}
          
          <Route exact path="/" element={<AddFood />} />
          <Route exact path="/foods" element={<Foods />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
