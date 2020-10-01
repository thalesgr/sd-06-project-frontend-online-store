import React, { Component } from 'react';
import CampoBusca from '../Components/CampoBusca';
import ListaCategorias from '../Components/ListaCategorias'
import Produto from '../Components/Produto';
import * as Api from '../services/api';
import '../App.css'

// eslint-disable-next-line react/prefer-stateless-function
class ListaDeProdutos extends Component {
  constructor() {
    super();
    this.state = {
      produtos: [],
      categoryId: '',
    };
    this.fetchAPI = this.fetchAPI.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(props) {
    this.fetchAPI(props);
  }

  async fetchAPI(props) {
    const { categoryId } = this.state;
    const response = await Api.getProductsFromCategoryAndQuery(
      categoryId,
      props.search,
    );
    const { results } = response;
    this.setState({
      produtos: results,
    });
  }

  render() {
    const { produtos } = this.state;
    const zero = 0;
    return (
      <div class="wrapper">
        <ListaCategorias />
        <main>
          <CampoBusca onClick={ this.handleClick } />
          <ul>
            { produtos.length === zero ? <p>Nenhum produto foi encontrado</p>
              : produtos.map((produto) => (
                <Produto key={ produto.id } produto={ produto } />
              )) }
          </ul>
        </main>
      </div>
    );
  }
}

export default ListaDeProdutos;


