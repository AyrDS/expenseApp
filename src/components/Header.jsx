import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { NewBudget, BudgetControl } from './';

export const Header = () => {

   /* { setBudget, budget, isValidBudget, setIsValidBudget, expenses, setExpenses } */

   const { isValidBudget } = useContext(ExpensesContext);

   return (
      <header>
         <h1>Controlador de gastos</h1>

         {
            isValidBudget
               ? <BudgetControl
                  /* budget={budget}
                  expenses={expenses}
                  setExpenses={setExpenses}
                  setBudget={setBudget}
                  setIsValidBudget={setIsValidBudget} */

               />
               : <NewBudget
                  /* budget={budget}
                  setBudget={setBudget}
                  setIsValidBudget={setIsValidBudget} */
               />
         }


      </header>
   )
}
