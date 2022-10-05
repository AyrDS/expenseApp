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
            ...modalObj,
            modal: true
         });

         setTimeout(() => {
            setModalObj({
               ...modalObj,
               animationModal: true
            });
         }, 500);
      }

   }, [expenseEdit]);

   useEffect(() => {
      localStorage.setItem('budget', budget ?? 0);
   }, [budget]);

   useEffect(() => {
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
         ...modalObj,
         modal: true
      });

      setExpensesObj({
         ...expensesObj,
         expenseEdit: {}
      })

      setTimeout(() => {
         setModalObj({
            ...modalObj,
            animationModal: true
         });
      }, 500);
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
         setExpensesObj({
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
      }, 500);
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
   }

   return (
      <Provider value={valueObj}>
         {children}
      </Provider>
   )

}