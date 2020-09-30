import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './services/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import CategoryDisplay from './components/CategoryDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/shoppingcart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
        <CategoryDisplay />
      </BrowserRouter>
    </div>
  );
}

export default App;
