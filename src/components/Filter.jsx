import { options } from '../helpers';

export const Filter = ({ filter, setFilter }) => {

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

