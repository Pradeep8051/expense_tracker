// src/features/expenseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
  name: 'expenses',
  initialState: {
    expense: [],
    income:[]
  },
  reducers: {
    addExpense: (state, action) => {
      state.expense.push(action.payload);
    },
    editExpense: (state, action) => {
      const { id, name, amount } = action.payload;
      const expenseToUpdate = state.expense.find(expense => expense.id === id);
      if (expenseToUpdate) {
        expenseToUpdate.name = name;
        expenseToUpdate.amount = amount;
      }
    },
      removeExpense: (state, action) => {
        state.expense.splice(action.payload, 1);
      },

    addIncome:(state,action)=>{
        state.income.push(action.payload);
    }
,
    removeIncome: (state, action) => {
       state.income.splice(action.payload, 1);;
      },
  
  },
});

export const { addExpense, editExpense, removeExpense ,addIncome,removeIncome} = expenseSlice.actions;

export default expenseSlice.reducer;
