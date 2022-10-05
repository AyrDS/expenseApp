import { createContext, useEffect, useState } from 'react';
import { generateID } from '../helpers';

export const ExpensesContext = createContext();
const { Provider } = ExpensesContext;

export const ExpensesProvider = ({ children }) => {

   const [budgetObj, setBudgetObj] = useState({
      budget: Number(localStorage.getItem('budget')) || 0,
      isValidBudget: false
   });
   const { budget } = budgetObj;

   const [modalObj, setModalObj] = useState({
      modal: false,
      animationModal: false
   });

   const [expensesObj, setExpensesObj] = useState({
      expenses: JSON.parse(localStorage.getItem('expenses')) || [],
      expenseEdit: {},
   });
   const { expenses, expenseEdit } = expensesObj;

   const [filter, setFilter] = useState('');
   const [filteredExpenses, setFilteredExpenses] = useState([]);

   useEffect(() => {
      if (Object.keys(expenseEdit).length > 0) {
         setModalObj({
            animationModal: false,
            modal: true
         });

         setTimeout(() => {
            setModalObj({
               modal: true,
               animationModal: true
            });
         }, 300);
      }

   }, [expenseEdit]);

   useEffect(() => {
      localStorage.setItem('budget', budget ?? 0);
   }, [budget]);

   useEffect(() => {
      console.log(expenses);
      localStorage.setItem('expenses', JSON.stringify(expenses) ?? []);
   }, [expenses]);

   useEffect(() => {
      if (filter) {
         const newState = expenses.filter(expense => expense.category === filter);
         setFilteredExpenses(newState);
      }
   }, [filter]);

   useEffect(() => {
      const budgetLS = Number(localStorage.getItem('budget')) || 0;

      if (budgetLS > 0) {
         setBudgetObj({
            ...budgetObj,
            isValidBudget: true
         });
      }
   }, []);

   const handleNewExpense = () => {
      setModalObj({
         animationModal: false,
         modal: true
      });

      setExpensesObj({
         ...expensesObj,
         expenseEdit: {}
      })

      setTimeout(() => {
         setModalObj({
            modal: true,
            animationModal: true
         });
      }, 300);
   }

   const saveExpense = expense => {
      if (expense.id) {
         const expenseUpdated = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
         setExpensesObj({
            ...expensesObj,
            expenses: expenseUpdated,
            expenseEdit: {}
         });
      } else {
         expense.id = generateID();
         expense.date = Date.now();
         console.log(expense);
         setExpensesObj({
            ...expensesObj,
            expenses: [...expenses, expense]
         });
      }

      setModalObj({
         ...modalObj,
         animationModal: false
      });

      setTimeout(() => {
         setModalObj({
            ...modalObj,
            modal: false
         });
      }, 300);
   }

   const deleteExpense = id => {
      const expensesUpdated = expenses.filter(expense => expense.id !== id);
      setExpensesObj({
         ...expensesObj,
         expenses: expensesUpdated
      });
   }

   const valueObj = {
      ...budgetObj,
      ...expensesObj,
      ...modalObj,
      filter,
      filteredExpenses,
      deleteExpense,
      handleNewExpense,
      saveExpense,
      setBudgetObj,
      setExpensesObj,
      setFilter,
      setFilteredExpenses,
      setModalObj
   }

   return (
      <Provider value={valueObj}>
         {children}
      </Provider>
   )

}