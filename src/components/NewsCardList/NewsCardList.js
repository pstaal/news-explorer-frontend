import './NewsCardList.css';
import notFound from '../../images/not-found.svg';
import NewsCard from '../../components/NewsCard/NewsCard';
import React from 'react';

function NewsCardList(props) {

    const [counter, setCounter] = React.useState(3);
  
    if (props.cardData === null) {
        return (
            <></>
        )
    }

    const filterArray = (array, number) => {
        let newArray = [];
        for (let i = 0; i < number; i++){
            if(array[i]) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }

    if (props.cardData) {
        const filteredCards = filterArray(props.cardData, counter);
        const showButton = filteredCards.length !== props.cardData.length;

        return (
            <section className="cardlist">
                <h1 className="cardlist__title">Search results</h1>
                <div className="cardlist__container">
                    {filteredCards.map((card, index) => <NewsCard key={index} card={card}/>)}
                </div>
                {showButton && <button className="cardlist__button" onClick={() => setCounter(counter + 3)}>Show more</button>}
            </section>
        )
    }

    if(!props.cardData) {
        return (
            <section className="nocards">
                <div className="nocards__content">
                    <img src={notFound} alt="nothing found" className="nocards__image" />
                    <h1 className="nocards__title">Nothing found</h1>
                    <p className="nocards__text">Sorry, but nothing matched your search terms.</p>
                </div>
            </section>
        )
    }

}
  
  export default NewsCardList;