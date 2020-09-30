/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';
import React from 'react';

class ProductList extends React.Component {
  render() {
    const { items } = this.props;
    const { title, price, thumbnail } = items;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="item" width="250px" />
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductList;
