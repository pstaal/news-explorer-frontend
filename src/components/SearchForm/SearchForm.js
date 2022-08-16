import './SearchForm.css';

function SearchForm() {
    return (
      <form className="search">
        <input className="search__input" type="text" placeholder="Enter topic" />
        <button className="search__button">Search</button>
      </form>
    )
  }
  
  export default SearchForm;