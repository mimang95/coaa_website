import React, { useState, createContext } from 'react';

interface CartItem {
  item: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: string) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const ShoppingCartProvider: React.FC = ({ children }:any) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: string) => {
    setCart([...cart, { item }]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const ShoppingCart: React.FC = () => {
  const { cart, addToCart } = React.useContext<any>(CartContext);

  return (
    <div>
      <h2>Warenkorb</h2>
      <ul>
        {cart.map((item:any, index:any) => (
          <li key={index}>{item.item}</li>
        ))}
      </ul>
      <button onClick={() => addToCart('Artikel 1')}>Artikel 1 hinzufügen</button>
    </div>
  );
};

export { ShoppingCartProvider, ShoppingCart };