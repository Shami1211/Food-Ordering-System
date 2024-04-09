// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//Home
import Home from './components/Food Ordering/Home';
// Admin-Food Adding 
import AddFood from './components/Food Ordering/Admin/Add Food/AddFood';
import AdminFoods from './components/Food Ordering/Admin//Food/Foods';
 //User-Food Display,Order 
import UserFoods from './components/Food Ordering/User/Food/Foods';
import FoodDetails from './components/Food Ordering/User/Food/FoodDetails';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          {/* Defult Home */}
        <Route exact path="/" element={<Home />} />

          {/* Admin-Food Adding */}
          <Route exact path="/add-food" element={<AddFood />} />
          <Route exact path="/admin-foods" element={<AdminFoods />} />

           {/* User-Food Display,Order */}
          <Route exact path="/user-foods" element={<UserFoods />} />
          <Route exact path="/food-details/:id" element={<FoodDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
