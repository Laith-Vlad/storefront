
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Product';
import Categories from './components/Categories/Categories'
function App() {
  
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products  />
      <Footer />
  
    </div>
  );
}

export default App;
