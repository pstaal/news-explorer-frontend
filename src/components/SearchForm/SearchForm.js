import './SearchForm.css';
import React from 'react';

function SearchForm() {

    const [searchTerm, setSearchTerm] = React.useState('');

    const changeSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const submitSearch = () => {
        //send search to api
        console.log(searchTerm)
    }

    return (
      <form className="search" onSubmit={submitSearch}>
        <input value={searchTerm} onChange={changeSearch} className="search__input" type="text" placeholder="Enter topic" />
        <button type="submit" className="search__button">Search</button>
      </form>
    )
  }
  
  export default SearchForm;