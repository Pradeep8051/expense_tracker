
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import ExpenseList from './ExpenseList';
import { database } from '../Config/config';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Naavbar from './navbar/Naavbar';
import { db } from '../Config/config';
import { addDoc,collection } from 'firebase/firestore';
const AddExpense = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} >
      Expense Chart
    </Tooltip>
  );
  const history = useNavigate();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [isNameErrorShown, setIsNameErrorShown] = useState(false);
  const user = database.currentUser
  console.log(user, "userhnfiohjoijo");

  const expenses = useSelector(state => state.expenses);
  const handleAdd = (type, evt) => {
    evt.preventDefault();
    const incomeRef = collection(db, 'income')
    const expenseRef = collection(db, 'expense')
    
    if (!name || !amount) {
      toast.error({
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (!isNaN(name) && !isNameErrorShown) {
      toast.error("Name input shouldn't be a number", {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsNameErrorShown(true);
      return;
    }
    const userData = {
      name: name,
      amount: parseFloat(amount),
      timestamp: Date.now(),
      id:user.uid
      
    };

    
    if (type === 'income') {
      try {
        addDoc(incomeRef, userData);
        console.log('User data saved successfully');
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    } else {
      try {
        addDoc(expenseRef, userData);
        console.log('User data saved successfully');
      } catch (error) {
        console.error('Error saving user data:', error);
      }
    }
    setName('');
    setAmount('')
  };

  const handleNameKeyPress = (e) => {
    if (e.key >= '0' && e.key <= '9') {
      e.preventDefault();
    }
  };

  const handleGoToChart = () => {
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
    <>
      <Naavbar />
      <div className='w-100% mt-5 mb-5' style={{ backgroundColor: 'black', paddingTop: '70px' }}>
        <div className='container pt-5 pb-5' style={{ borderRadius: '10px', backgroundColor: 'darkgray', marginBottom: '40px' }}>
          <h2>Add New Transaction</h2>
          <form className='transaction-form'>
            <label>
              Name
              <input
                name='name'
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
                name='amount'
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
          <h3 onClick={handleGoToChart}><OverlayTrigger
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
    </>

  );
};

export default AddExpense;
