import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { NewBudget, BudgetControl } from './';

export const Header = () => {

   const { isValidBudget } = useContext(ExpensesContext);

   return (
      <header>
         <h1>Controlador de gastos</h1>

         {
            isValidBudget
               ? <BudgetControl />
               : <NewBudget />
         }


      </header>
   )
}
