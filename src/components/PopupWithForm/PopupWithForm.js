import './PopupWithForm.css';


function PopupWithForm() {

    const isOpen = true;

    return (
       <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
           <div className="popup__container">
               <button type="button" className="popup__close"></button>
               <h3 className="popup__title">Sign in</h3>
               <form className="popup__form">
               </form>
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;