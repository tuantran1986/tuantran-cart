import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import Message from './Message';
import CartList from './CartList';


function App() {
  return (
    <>
      <div>
        <Header />

        <main id="mainContainer">
          <div className="container">

            <ProductList />
            <Message />
            <CartList />

          </div>
        </main>

        <Footer />
      </div>

    </>
  );
}

export default App;
