import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  return (
    <div className="page">
    <div className="overlay"></div>
      <Header />
        <Routes>
          <Route exact path="/" element={ <Main />} />
          <Route path="/saved-news" element={<><SavedNewsHeader/><SavedNews/></>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
