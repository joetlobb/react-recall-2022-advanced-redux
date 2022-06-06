import { useState } from "react";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevState) => {
      return !prevState;
    });
  };

  return (
    <Layout onShowCart={showCartHandler}>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
};

export default App;
