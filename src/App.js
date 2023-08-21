import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Naavbar from "./components/navbar/Naavbar"
import ChartPage from './pages/ChartPage';

import { Provider } from 'react-redux';
import store from './store';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <div>
      <Router>
        <Provider store={store}>
          <div className="App">
            <Naavbar />
            <ToastContainer />
            <Routes>
              <Route path='/' element={<AddExpense />} />
              <Route path='/' element={<ExpenseList />} />
              <Route path="/chart" element={<ChartPage />} />
            </Routes>
          </div>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
