import { useContext } from 'react';
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import { ExpensesContext } from '../context/ExpensesContext';
import { dateFormat } from '../helpers';
import ahorroIcon from '../assets/icono_ahorro.svg';
import casaIcon from '../assets/icono_casa.svg';
import comidaIcon from '../assets/icono_comida.svg';
import gastosIcon from '../assets/icono_gastos.svg';
import ocioIcon from '../assets/icono_ocio.svg';
import saludIcon from '../assets/icono_salud.svg';
import suscripcionesIcon from '../assets/icono_suscripciones.svg';

import 'react-swipeable-list/dist/styles.css';

const dictionaryIcons = {
   ahorro: ahorroIcon,
   casa: casaIcon,
   comida: comidaIcon,
   gastos: gastosIcon,
   ocio: ocioIcon,
   salud: saludIcon,
   suscripciones: suscripcionesIcon,
}

export const Expense = ({ expense }) => {
   const { deleteExpense, setExpensesObj } = useContext(ExpensesContext);

   const { category, name, quantity, date, id } = expense;

   const leadingActions = () => (
      <LeadingActions>
         <SwipeAction onClick={() => setExpensesObj(prev => ({ ...prev, expenseEdit: expense }))} >
            Editar
         </SwipeAction>
      </LeadingActions>
   )

   const trailingActions = () => (
      <TrailingActions>
         <SwipeAction onClick={() => deleteExpense(id)} destructive={true} >
            Eliminar
         </SwipeAction>
      </TrailingActions>
   )

   return (
      <SwipeableList>
         <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
         >

            <div className="gasto sombra" >

               <div className="contenido-gasto" >
                  <img
                     src={dictionaryIcons[category]}
                     alt='Gasto Icono'
                  />
                  <div className="descripcion-gasto">
                     <p className="categoria" > {category} </p>
                     <p className="nombre-gasto">{name}</p>
                     <p className="fecha-gasto">
                        Agregado el: <span>{dateFormat(date)}.</span>
                     </p>
                  </div>
               </div>

               <p className='cantidad-gasto' >${quantity}</p>

            </div>
         </SwipeableListItem>
      </SwipeableList>
   )
}
