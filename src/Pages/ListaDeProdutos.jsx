import React, { Component } from "react";
import { Link } from "react-router-dom";
import CampoBusca from "../Components/CampoBusca";
import ListaCategorias from "../Components/ListaCategorias";
import Produto from "../Components/Produto";
import * as Api from "../services/api";
import carrinho from "../img/shopping-cart.png";
import "../App.css";

// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      categoryId: "",
      produtosNoCarrinho: [],
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.categoryFilter = this.categoryFilter.bind(this);
  }

  categoryFilter({ target }) {
    const { value } = target;
    this.setState({ categoryId: value }, () => this.fetchAPI());
  }

  handleClick(props) {
    this.fetchAPI(props);
  }

  async fetchAPI() {
    const { categoryId, search } = this.state;
    const response = await Api.getProductsFromCategoryAndQuery(
      categoryId,
      search
    );
    const { results } = response;
    // console.log(results);
    this.setState({
      produtos: results,
    });
  }
  
  addToCart(produto) {
    console.log(produto);
  }

  render() {
    const { produtos } = this.state;
    const zero = 0;
    return (
      <div>
        <ListaCategorias categoryFilter={this.categoryFilter} />
        <CampoBusca onClick={this.handleClick} />
        <ul>
          {produtos.length === zero ? (
            <p>Nenhum produto foi encontrado</p>
          ) : (
            produtos.map((produto) => (
              <Produto key={produto.id} produto={produto} onClick={this.addToCart} />
            ))
          )}
        </ul>
        <Link to="/CarrinhoDeCompras" data-testid="shopping-cart-button">
          <img src={carrinho} className="cart-img" alt="ícone carrinho" />
        </Link>
      </div>
    );
  }
}

export default ListaDeProdutos;
