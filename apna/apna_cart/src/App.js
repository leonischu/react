import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from'./components/ProductList';
import React,{useState} from 'react'


function App() {
  const productList = [
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
    <main className='container' mt-5>
    <ProductList productList={productList}/>
    </main>
    {/* <Footer/> */}
      </>
  );
}

export default App;
