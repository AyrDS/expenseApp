import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { Expense } from './Expense';


export const ExpensesList = () => {
   const { expenses, filteredExpenses, filter } = useContext(ExpensesContext);

   return (
      <div className="listado-gastos contenedor" >

         {
            filter ?
               <>
                  <h2>{filteredExpenses.length > 0 ? 'Gastos' : 'No hay gastos en esta categoría'}</h2>
                  {
                     filteredExpenses.map(expense => (
                        <Expense key={expense.id} expense={expense} />
                     ))
                  }
               </>
               :
               <>
                  <h2>{expenses.length ? 'Gastos' : '¡No hay gastos todavía!'}</h2>

                  {
                     expenses.map(expense => (
                        <Expense key={expense.id} expense={expense} />
                     ))
                  }
               </>
         }

      </div>
   )
}
