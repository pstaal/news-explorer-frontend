import Hero from "../Hero/Hero";
import About from "../About/About";
import React from 'react';
import Preloader from "../Preloader/Preloader";
import NewsCardList from '../NewsCardList/NewsCardList';
import cards from "../../utils/cardData";

function Main() {

    const [loading, setLoading] = React.useState(false);
    const [cardData, setCardData] = React.useState(null);

    //simulate asynchronous succesful call to api
    const sleep = () => new Promise(resolve => setTimeout(resolve, 5000));
    //use Promise.reject to simulate a failing call to api

    const onSearchSubmit = (searchTerm) => {
        setLoading(true)
        sleep().then(() => {
            setCardData(cards);
        }).catch(() => {
            setCardData([]);    
        }).finally(() => {
            setLoading(false);
            document.querySelector('.search__button').classList.remove('search__button-clicked');
        });
    }

    return (
        <>
            <Hero onSubmit={onSearchSubmit}/>
            {loading && <Preloader/>}
            {!loading && <NewsCardList cardData={cardData} />}
            <About />
        </>
    );
  }
  
  export default Main;