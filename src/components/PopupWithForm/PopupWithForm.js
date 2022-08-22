import './PopupWithForm.css';


function PopupWithForm({closeModal, isModalOpen}) {

    return (
       <div className={`popup ${isModalOpen? 'popup_opened' : ''}`}>
           <div className="popup__container">
               <button type="button" className="popup__close" onClick={closeModal}></button>
               <h3 className="popup__title">Sign in</h3>
               <form className="popup__form">
               </form>
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;