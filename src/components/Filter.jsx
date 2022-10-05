import { useContext } from 'react';
import { ExpensesContext } from '../context/ExpensesContext';
import { options } from '../helpers';

export const Filter = () => {

   const { filter, setFilter } = useContext(ExpensesContext);

   return (
      <div className='filtros sombra contenedor' >
         <form >
            <div className="campo">
               <label>Filtrar gastos</label>
               <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                  {
                     options.map(({ label, value }) => (
                        <option key={label} value={value} > {label} </option>
                     ))
                  }
               </select>
            </div>
         </form>
      </div>
   )
}

