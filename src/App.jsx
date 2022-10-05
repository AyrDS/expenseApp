import { ExpensesList, Filter, Header, Modal } from './components';
import newExpense from './assets/nuevo-gasto.svg';
import { useContext } from 'react';
import { ExpensesContext } from './context/ExpensesContext';


export const App = () => {

   const { isValidBudget, modal, handleNewExpense } = useContext(ExpensesContext);

   return (
      <div className={modal ? 'fijar' : ''} >
         <Header />

         {
            isValidBudget &&
            <>
               <main>
                  <Filter />
                  <ExpensesList />
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
            /* modal &&
            <Modal
               setModal={setModal}
               animationModal={animationModal}
               setAnimationModal={setAnimationModal}
               saveExpense={saveExpense}
               expenseEdit={expenseEdit}
               setExpenseEdit={setExpenseEdit}
            /> */
         }

      </div>
   )
}
