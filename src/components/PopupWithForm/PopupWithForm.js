import './PopupWithForm.css';
import React from 'react';

function PopupWithForm({closeModal, isModalOpen}) {

    React.useEffect(() => {
        const closeOnEscape = (e) => {
          if(e.keyCode === 27){
            closeModal()
          }
        }

        const closeOnClick = (e) => {
            if(e.target.classList.contains('popup') && !e.target.classList.contains('popup__container')){
                closeModal()
            }
        }

        window.addEventListener('click', closeOnClick);
        window.addEventListener('keydown', closeOnEscape);

      return () => {
        window.removeEventListener('click', closeOnClick);
        window.removeEventListener('keydown', closeOnEscape)
      };
    },[closeModal])

    return (
       <div className={`popup ${isModalOpen? 'popup_opened' : ''}`}>
           <div className="popup__container">
               <button type="button" className="popup__close" onClick={closeModal}></button>
               <h3 className="popup__title">Sign in</h3>
               <form className="popup__form">
               <label className="popup__label" for="name">Email</label>
               <input className="popup__input" type="text" name="name" id="name" placeholder="Enter email"/>
               <label className="popup__label" for="name">Password</label>
               <input className="popup__input" type="password" name="password" id="password" placeholder="Enter password"/>
               <button className="popup__button" type="submit">Sign in</button>
               </form>
               <p className="popup__text">Or <a href="#">Sign up</a></p>
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;