import { ExpensesList, Filter, Header, Modal } from './components';
import newExpense from './assets/nuevo-gasto.svg';
import { useContext } from 'react';
import { ExpensesContext } from './context/ExpensesContext';


export const App = () => {

   const { isValidBudget, modal } = useContext(ExpensesContext);

   return (
      <div className={modal ? 'fijar' : ''} >
         <Header />

         {/* {
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
         } */}

      </div>
   )
}

/* <div className={modal ? 'fijar' : ''} >
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

      </div> */