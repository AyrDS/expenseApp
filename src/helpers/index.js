
export const generateID = () => {
   const random = Math.random().toString(36).substring(2);
   const date = Date.now().toString(36);

   return random + date;
}

export const dateFormat = date => {
   const newDate = new Date(date);

   return newDate.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
   });
}

export const options = [
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
