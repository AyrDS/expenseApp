import { useEffect, useState } from 'react';
import { ExpensesList, Filter, Header, Modal } from './components';
import newExpense from './assets/nuevo-gasto.svg';
import { generateID } from './helpers';

export const App = () => {

   const [budget, setBudget] = useState(Number(localStorage.getItem('budget')) || 0);
   const [isValidBudget, setIsValidBudget] = useState(false);
   const [modal, setModal] = useState(false);
   const [animationModal, setAnimationModal] = useState(false);
   const [expenses, setExpenses] = useState(JSON.parse(localStorage.getItem('expenses')) || []);
   const [expenseEdit, setExpenseEdit] = useState({});
   const [filter, setFilter] = useState('');
   const [filteredExpenses, setFilteredExpenses] = useState([]);

   useEffect(() => {
      if (Object.keys(expenseEdit).length > 0) {
         setModal(true);

         setTimeout(() => {
            setAnimationModal(true);
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
         setIsValidBudget(true);
      }
   }, []);


   const handleNewExpense = () => {
      setModal(true);
      setExpenseEdit({});

      setTimeout(() => {
         setAnimationModal(true);
      }, 500);
   }

   const saveExpense = expense => {
      if (expense.id) {
         const expenseUpdated = expenses.map(expenseState => expenseState.id === expense.id ? expense : expenseState);
         setExpenses(expenseUpdated);
         setExpenseEdit({});
      } else {
         expense.id = generateID();
         expense.date = Date.now();
         setExpenses([...expenses, expense]);
      }

      setAnimationModal(false);

      setTimeout(() => {
         setModal(false);
      }, 500);
   }

   const deleteExpense = id => {
      const expensesUpdated = expenses.filter(expense => expense.id !== id);
      setExpenses(expensesUpdated);
   }

   return (
      <div className={modal ? 'fijar' : ''} >
         <Header
            expenses={expenses}
            setExpenses={setExpenses}
            budget={budget}
            setBudget={setBudget}
            isValidBudget={isValidBudget}
            setIsValidBudget={setIsValidBudget}
         />

         {
            isValidBudget &&
            <>
               <main>
                  <Filter filter={filter} setFilter={setFilter} />
                  <ExpensesList
                     expenses={expenses}
                     setExpenseEdit={setExpenseEdit}
                     deleteExpense={deleteExpense}
                     filter={filter}
                     filteredExpenses={filteredExpenses}
                  />
               </main>
               <div className='nuevo-gasto'>
                  <img
                     src={newExpense}
                     alt="icon New expense"
                     onClick={handleNewExpense}
                  />
               </div>
            </>
         }

         {
            modal &&
            <Modal
               setModal={setModal}
               animationModal={animationModal}
               setAnimationModal={setAnimationModal}
               saveExpense={saveExpense}
               expenseEdit={expenseEdit}
               setExpenseEdit={setExpenseEdit}
            />
         }

      </div>
   )
}
