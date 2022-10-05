import { useState } from 'react';
import { Msg } from './';


export const NewBudget = ({ setBudget, budget, setIsValidBudget }) => {

   const [msg, setMsg] = useState('');

   const handleBudget = (e) => {
      e.preventDefault();

      if (!budget || budget < 0) {
         return setMsg('No es un presupuesto válido');
      }

      setMsg('');
      setIsValidBudget(true);
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
                  onChange={(e) => setBudget(Number(e.target.value))}
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
