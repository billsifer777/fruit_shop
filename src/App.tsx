import React, {useState} from 'react';
import {Home} from "./pages/home/Home";
import {Footer} from "./components/footer/Footer";
import {Route, Routes, useParams} from "react-router";
import {Buy_product} from "./pages/buy_product/Buy_product";
import {useProducts} from "./hooks/products";
import {ModalState} from "./context/ProductContext";
import {Cart} from "./pages/cart/Cart";
import {useDispatch, useSelector} from "react-redux";
import {IProduct} from "./components/model";
import axios from "axios";


function App() {


  return (
      <>
          <div className="container">
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  {/*<Route path='/shop' element={<Cart product={products[0]}/>}/>*/}
                  <Route path='/shop/:Id' element={<Buy_product/>}/>
                  <Route path='/cart/:Id' element={<Cart/>}/>
              </Routes>
          </div>
          <Footer></Footer>
      </>
  );
}


export default App;
