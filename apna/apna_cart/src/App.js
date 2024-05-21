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
  let [ProductList, setProductList ]= useState(products)
  incrementQuantity= (index) =>{
    let newProductList = [...productList]
    newProductList[index].quantity++
    setProductList(newProductList);
  }
  return (
    <><Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList} incrementQuantity={this.incrementQuantity}/>
    </main>
    {/* <Footer/> */}
      </>
  );
}

export default App;
