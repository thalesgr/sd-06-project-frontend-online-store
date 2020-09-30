import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;

    return (
      <div className="card" data-testid="product">
        <h3 className="product-title">{title}</h3>
        <img className="product-img" src={ thumbnail } alt={ title } />
        <p className="product-price">
          R$
          {' '}
          {price}
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
