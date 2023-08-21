
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addExpense, addIncome } from '../features/expenseSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import ExpenseList from './ExpenseList';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


const AddExpense = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} >
      Expense Chart
    </Tooltip>
  );
  const history = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const expenses = useSelector(state => state.expenses);
  const handleAdd = (type, evt) => {
    evt.preventDefault();
    if (!name || !amount) {
      toast.error('Please fill in all fields', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!isNaN(name)) {
      toast.error("Name input shouldn't be a number", {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (type === 'income') {
      dispatch(addIncome({ name, amount: parseFloat(amount), timestamp: Date.now() }));
    } else {
      dispatch(addExpense({ name, amount: parseFloat(amount), timestamp: Date.now() }));
    }

    setName('');
    setAmount('');

    toast.success(type !== 'expense' ? 'Income Added' : 'Expense Added', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleNameKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') {
      e.preventDefault();
    }
  };

  const handleGoToChat = () => {
    // Prepare expenses data to be sent to ChatPage
    const expensesData = {
      income: expenses?.income,
      expense: expenses?.expense,
    };

    // console.log(expensesData, 'expensesData...........');

    // Navigate to the ChatPage and pass expensesData as a prop
    history('/chart', { state: { expenses: expensesData } });
  };

  return (
    <div className='w-100% mt-5 mb-5' style={{ backgroundColor: 'black', paddingTop: '70px' }}>
      <div className='container pt-5 pb-5' style={{ borderRadius: '10px', backgroundColor: 'darkgray', marginBottom: '40px' }}>
        <h2>Add New Transaction</h2>
        <form className='transaction-form'>
          <label>
            Name
            <input
              type='text'
              placeholder='Transaction Name'
              value={name}
              onChange={e => setName(e.target.value)}
              onKeyDown={handleNameKeyPress}
            />
          </label>

          <label>
            Amount
            <input
              type='number'
              placeholder='Amount'
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
          </label>
          <div className='d-flex justify-content-around'>
            <button className='income-btn' onClick={(e) => handleAdd('income', e)}>Add Income</button>
            <button className='expense-btn' onClick={(e) => handleAdd('expense', e)}>Add Expense</button>
          </div>
        </form>
        <h3 onClick={handleGoToChat}><OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <FontAwesomeIcon icon={faChartLine} />
        </OverlayTrigger>
        </h3>
      </div>

      <ExpenseList />
    </div>
  );
};

export default AddExpense;
