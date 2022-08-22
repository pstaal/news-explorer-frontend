import './NewsCard.css';
import { useLocation } from 'react-router-dom';


function NewsCard({card}) {

    const location = useLocation();
    const isSavedArticlesUrl = location.pathname === '/saved-news';

    return (
     <div className="newscard">
        <img className="newscard__image" src={card.image} alt="card"/>
        {isSavedArticlesUrl ? <button className='newscard__category'>{card.category}</button> : ''}
        {isSavedArticlesUrl ? <button className='delete__button'></button> : <button className='newscard__button'></button>}
        <p className="newscard__tooltip">Sign in to save articles</p>
        <div className="newscard__content">
            <p className="newscard__date">{card.date}</p>
            <h1 className="newscard__title">{card.title}</h1>
            <p className="newscard__text">{card.text}</p>
            <p className="newscard__source">{card.source}</p>
        </div>
     </div>
    )
  }
  
  export default NewsCard;