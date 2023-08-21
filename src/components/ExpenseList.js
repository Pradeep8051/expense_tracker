import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Expense from './Expense';
import { removeExpense, removeIncome } from '../features/expenseSlice';
import { toast } from 'react-toastify';

const ExpenseList = () => {
    const dispatch = useDispatch()
    const expenses = useSelector(state => state?.expenses);
    const incomeData = expenses?.income
    const expenseData = expenses?.expense
    // console.log(incomeData, "incomeData.......");



    const totalIncome = incomeData.reduce((total, item) => total + item.amount, 0);
    const totalExpense = expenseData.reduce((total, item) => total + item.amount, 0);
    const balance = totalIncome - totalExpense;
    //track expense here
    // const income = incomeData?.amount
    // console.log(income);

    // const expense = expenseData?.amount
    // console.log(expense);


    /*** DELETE action call */
    const handleDelete = (index, type) => {
        if (type === "expense") {
            dispatch(removeExpense(index));
        }
        else {
            dispatch(removeIncome(index));
        }
        toast.error(type === "expense" ? "Expense Deleted" : "Income Deleted", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    
    return (


        <div className='container pt-5 pb-5' style={{ borderRadius: "10px", backgroundColor: "black" }}>

            <div>
                <h2>Track Your Expense</h2>
                <div className='text-center '>
                    <h2>Your Balance</h2>
                    <div className='balance-val'>Rs.{balance}</div>
                </div>
            </div>


            <div className='d-flex justify-content-center'>
                <div className='col-md-6' style={{ fontFamily: "cursive", fontSize: "22px", borderRight: "2px solid white" }}>
                    <h2 className='text-center mt-5'>Income List</h2>
                    {incomeData?.map((item, index) => (
                        <div key={index}><Expense data={item} />
                            <button className='btn btn-danger' onClick={() => handleDelete(index, "income")} style={{marginLeft:"480px",marginTop:"-310px"}}>Delete</button>
                        </div>
                    ))}
                </div>
                <div className='col-md-6' style={{ fontFamily: "cursive", fontSize: "22px", paddingLeft:"20px" }}>
                    <h2 className='text-center mt-5'>Expense List</h2>
                    {expenseData?.map((item, index) => (
                        <div key={index}><Expense data={item} />
                            <button className='btn btn-danger' onClick={() => handleDelete(index, "expense")} style={{marginLeft:"480px",marginTop:"-310px"}}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ExpenseList;
