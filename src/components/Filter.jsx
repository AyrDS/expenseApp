import { useState } from 'react';

const options = [
   {
      label: '--Seleccione--',
      value: ''
   },
   {
      label: 'Ahorro',
      value: 'ahorro'
   },
   {
      label: 'Comida',
      value: 'comida'
   },
   {
      label: 'Casa',
      value: 'casa'
   },
   {
      label: 'Gastos varios',
      value: 'gastos'
   },
   {
      label: 'Ocio',
      value: 'ocio'
   },
   {
      label: 'Salud',
      value: 'salud'
   },
   {
      label: 'Suscripciones',
      value: 'suscripciones'
   },
]

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

