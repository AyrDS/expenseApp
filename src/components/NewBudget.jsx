import { useContext, useState } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { Msg } from './';


export const NewBudget = () => {
   const { setBudgetObj, budget } = useContext(ExpensesContext);
   const [msg, setMsg] = useState('');

   const handleBudget = (e) => {
      e.preventDefault();

      if (!budget || budget < 0) {
         return setMsg('No es un presupuesto válido');
      }

      setMsg('');
      setBudgetObj(prev => ({
         ...prev,
         isValidBudget: true
      }));
   }


   return (
      <div className="contenedor-presupuesto contenedor sombra">

         <form onSubmit={handleBudget} className="formulario">
            <div className="campo">
               <label>Agregue presupuesto</label>

               <input
                  type="number"
                  className="nuevo-presupuesto"
                  value={budget}
                  onChange={(e) => setBudgetObj(prev => ({ ...prev, budget: Number(e.target.value) }))}
                  onFocus={(e) => e.target.select()}
               />

               <input type="submit" value='Agregar' />
               {
                  msg &&
                  <Msg type='error' >
                     {msg}
                  </Msg>
               }
            </div>
         </form>
      </div>
   )
}
