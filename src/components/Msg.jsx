
export const Msg = ({ children, type }) => {
   return (
      <div className={`alerta ${type}`} >
         {children}
      </div>
   )
} 
