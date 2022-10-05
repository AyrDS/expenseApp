
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
