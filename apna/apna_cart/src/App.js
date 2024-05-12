import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from'./components/ProductList';


function App() {
  const product = [
    {
    price:9999,
    name: "IPhone 10s max",
    quantity: 0,

    },
    {
      price:9999,
      name: "Redmi 10s max",
      quantity: 0,
  
      }
  ]
  return (
    <><Navbar/>
    <ProductList product={product}/>
    {/* <Footer/> */}
      </>
  );
}

export default App;
