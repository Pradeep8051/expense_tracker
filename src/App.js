import React from 'react';
import "./App.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
// import ScroolAnimation from './animation/ScroolAnimation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChartPage from './pages/ChartPage';
import Login from './forms/Login';
import { Provider } from 'react-redux';
import store from './store';
import AddExpense from './components/AddExpense';
import { ToastContainer } from 'react-toastify';
import Signup from './forms/Signup';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (

    <div>
      {/* <ScroolAnimation/> */}
      <Router>
        <Provider store={store}>
          <div className="App">

            <ToastContainer />
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/home' element={<ProtectedRoute><AddExpense /></ProtectedRoute>} />
              <Route path="/chart" element={<ProtectedRoute><ChartPage /></ProtectedRoute>} />
            </Routes>
          </div>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
