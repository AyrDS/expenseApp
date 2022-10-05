import { useEffect, useState } from 'react';
import closeBtn from '../assets/cerrar.svg';
import { options } from '../helpers';
import { Msg } from './';



export const Modal = ({ setModal, animationModal, setAnimationModal, saveExpense, expenseEdit, setExpenseEdit }) => {

   const [formValues, setFormValues] = useState({
      name: '',
      quantity: 0,
      category: '',
      id: null,
      date: null
   });
   const [msg, setMsg] = useState('');
   const { name, quantity, category } = formValues;

   useEffect(() => {
      if (Object.keys(expenseEdit).length > 0) {
         setFormValues({
            ...formValues,
            ...expenseEdit
         });
      }
   }, []);

   const handleInputChange = (e) => {
      setFormValues({
         ...formValues,
         [e.target.name]: e.target.value
      });
   }

   const closeModal = () => {
      setAnimationModal(false);
      setExpenseEdit({});
      
      setTimeout(() => {
         setModal(false);
      }, 500);
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if ([name, category].includes('') || quantity <= 0) {
         setMsg('Todos los campos son obligatorios');

         setTimeout(() => {
            setMsg('');
         }, 3000);

         return;
      };

      saveExpense({
         ...formValues,
         quantity: Number(quantity)
      });
   }

   return (
      <div className="modal" >
         <div className="cerrar-modal" >
            <img src={closeBtn} alt="Icon Close" onClick={closeModal} />
         </div>

         <form
            className={`formulario ${animationModal ? 'animar' : 'cerrar'}`}
            onSubmit={handleSubmit}
         >
            <legend>{expenseEdit.name ? 'Editar gasto' : 'Nuevo gasto'}</legend>
            {
               msg && <Msg type='error' >{msg}</Msg>
            }

            <div className="campo">
               <label htmlFor="name">Nombre gasto</label>

               <input
                  id='name'
                  type="text"
                  placeholder='Ej: Compras de la semana'
                  value={name}
                  name='name'
                  onChange={handleInputChange}
               />
            </div>

            <div className="campo">
               <label htmlFor="quantity">Cantidad</label>

               <input
                  id='quantity'
                  type="number"
                  placeholder='5.000'
                  value={quantity}
                  name='quantity'
                  onChange={handleInputChange}
                  onFocus={e => e.target.select()}
               />
            </div>

            <div className="campo">
               <label htmlFor="category">Category</label>

               <select name="category" id="category" value={category} onChange={handleInputChange} >
                  {
                     options.map(({ label, value }) => (
                        <option key={label} value={value} > {label} </option>
                     ))
                  }
               </select>
            </div>

            <input type="submit" value={expenseEdit.name ? 'Guardar cambios' : 'Agregar gasto'} />
         </form >
      </div >
   )
}

