import { useContext, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ExpensesContext } from '../context/ExpensesContext';
import 'react-circular-progressbar/dist/styles.css';

export const BudgetControl = () => {
   const { expenses, budget, setExpensesObj, setBudgetObj } = useContext(ExpensesContext);

   const [percentage, setPercentage] = useState(0);
   const [available, setAvailable] = useState(0);
   const [spent, setSpent] = useState(0);

   useEffect(() => {
      const totalSpent = expenses.reduce((total, expense) => expense.quantity + total, 0);
      const totalAvailable = budget - totalSpent;

      //Percentage
      const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

      setPercentage(newPercentage);
      setAvailable(totalAvailable);
      setSpent(totalSpent);
   }, [expenses]);

   const budgetFormat = (number) => {
      return number.toLocaleString('es-AR', {
         style: 'currency',
         currency: 'ARS'
      })
   }

   const handleResetApp = () => {
      const result = confirm('¿Deseas reinicar tu presupuesto y gastos?')
      if (result) {
         setExpensesObj(prev => ({
            ...prev,
            expenses: []
         }));
         setBudgetObj({
            budget: 0,
            isValidBudget: false
         });
      }
   }

   return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas" >
         <div>
            <CircularProgressbar
               styles={buildStyles({
                  pathColor: percentage > 100 ? '#DC2626' : '#3B82F6',
                  textColor: percentage > 100 ? '#DC2626' : '#3B82F6'
               })}
               value={percentage}
               text={`${percentage}% Gastado`}
            />
         </div>

         <div className="contenido-presupuesto" >
            <button className='reset-app' onClick={handleResetApp} >
               Resetar App
            </button>
            <p>
               <span>Presupuesto: </span> {budgetFormat(budget)}
            </p>

            <p className={`${available < 0 ? 'negativo' : ''}`} >
               <span>Disponible:</span> {budgetFormat(available)}
            </p>

            <p>
               <span>Gastado:</span> {budgetFormat(spent)}
            </p>
         </div>

      </div>
   )
}

