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
    const [searchError, setSearchError] = React.useState(false);
    const [apiError, setApiError] = React.useState(false);

    React.useEffect(() => {
       const savedCards = JSON.parse(localStorage.getItem("cards"));
       if(savedCards) {
        setCardData(savedCards);
       }
    },[])


    const onSearchSubmit = (searchTerm) => {
        setSearchError(false);
        setApiError(false);

        if (!searchTerm) {
            setSearchError(true);
            return;
        }

        setLoading(true)
        const currentDate = new Date();
        const currentDateIso = currentDate.toISOString();

        const weekOldDate = new Date();
        weekOldDate.setDate(weekOldDate.getDate() - 7);
        
        const weekOldDateIso = weekOldDate.toISOString();

        const params = {q:searchTerm, apiKey:'bfe2c6b3828a42b98edf272054bafaa6', from: weekOldDateIso, to: currentDateIso, pageSize: 100};

        newsApi.search(params).then((res) => {
            setCardData(res.articles);
            if (res.articles.length > 0) localStorage.setItem("cards", JSON.stringify(res.articles));
            if (res.articles.length === 0) localStorage.clear();
        }).catch((error)=> {
            setApiError(true);
        }).finally(() => {
            setLoading(false);
            document.querySelector('.search__button').classList.remove('search__button-clicked');
        });

    }

    return (
        <>
            <Hero onSubmit={onSearchSubmit} searchError={searchError}/>
            {loading && <Preloader/>}
            {!loading && <NewsCardList cardData={cardData} apiError={apiError}/>}
            <About />
        </>
    );
  }
  
  export default Main;