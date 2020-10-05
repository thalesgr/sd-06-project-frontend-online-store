import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: {
      title, thumbnail, price,
    } } } = this.props;
    return (
      <div data-testid="product-detail-name">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ `Imagem do produto ${title}` } />
        <h2>{price}</h2>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default ProductDetails;
