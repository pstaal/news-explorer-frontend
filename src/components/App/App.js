import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
    <div class="overlay"></div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
