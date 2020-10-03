import React from 'react';
import Cart from '../services/cart';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = { checkout: false };
  }

  addProduct(product) {
    Cart.addItem(product);
  }

  removeProduct(product) {
    if (product.amount > 1) {
      Cart.removeItem(product.id);
    } else {
      Cart.deleteItem(product.id);
    }
  }

  checkoutFields() {
    return (
      <div>
        <ShoppingCart />
        <div>
          <form>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
            />
            <input
              type="text"
              data-testid="
              checkout-email"
              placeholder="Email:
              exemplo@exem.com"
            />
            <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone (XX) XXXX-XXXX"
            />
            <input type="text" data-testid="checkout-cep" placeholder="CEP" />
            <input type="text" data-testid="checkout-address" placeholder="Endereço" />
          </form>
        </div>
      </div>
    );
  }


  render() {
    const { checkout } = this.state;
    if (checkout) {
      return this.checkoutFields();
    }
    const produtos = Cart.getItemsFromLocalStorage();
    return ((
      produtos.length < 1
        ? (
          <div>
            <h1>Carrinho de Compras</h1>
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          </div>
        )
        : (
          <div>
            <h1>Carrinho de Compras</h1>
            {produtos.map((element) => (
              <div key={ element.id }>
                <div data-testid="shopping-cart-product-name">
                  Produto:
                  {element.title}
                </div>
                <div>
                  <p>
                    Preço R$:
                    {element.price}
                  </p>
                  <div data-testid="shopping-cart-product-quantity">
                    <p>
                      {element.amount}
                    </p>
                  </div>
                  <img src={ element.thumbnail } alt="product" />
                  <button
                    type="button"
                    data-testid="product-increase-quantity"
                    onClick={ () => { this.addProduct(element); this.forceUpdate(); } }
                  >
                    +
                  </button>
                  <button
                    type="button"
                    data-testid="product-decrease-quantity"
                    onClick={ () => { this.removeProduct(element); this.forceUpdate(); } }
                  >
                    -
                  </button>
                  <button
                    onClick={ () => this.setState({ checkout: true }) }
                    data-testid="checkout-products"
                    type="button"
                  >
                    Comprar
                  </button>
                  <button type="button" onClick={ () => { Cart.removeAll(); } }>
                    Limpar carrinho
                  </button>
                </div>
              </div>
            ))}
          </div>)
    ));
  }
}

export default ShoppingCart;
