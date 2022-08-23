import Hero from "../Hero/Hero";
import About from "../About/About";
import React from 'react';
import Preloader from "../Preloader/Preloader";
import NewsCardList from '../NewsCardList/NewsCardList';
import cards from "../../utils/cardData";
import newsApi from "../../utils/newsApi";

function Main() {

    const [loading, setLoading] = React.useState(false);
    const [cardData, setCardData] = React.useState(null);

    //simulate asynchronous succesful call to api
    const sleep = () => new Promise(resolve => setTimeout(resolve, 5000));
    //use Promise.reject to simulate a failing call to api

    const onSearchSubmit = (searchTerm) => {
        setLoading(true)
        const currentDate = new Date();
        const currentDateIso = currentDate.toISOString();

        const weekOldDate = new Date();
        weekOldDate.setDate(weekOldDate.getDate() - 7);
        
        const weekOldDateIso = weekOldDate.toISOString();

        const params = {q:searchTerm, apiKey:'bfe2c6b3828a42b98edf272054bafaa6', from: weekOldDateIso, to: currentDateIso, pageSize: 100};

        newsApi.search(params).then((res) => {
            setCardData(res.articles);

        }).catch((error)=> {
            console.log(error);

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