import React from 'react';

// components
import CustomButton from '../custom-button/custom-button.component';

// redux
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

// styles
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// since there is not mapStateToProps, we pass "null" into connect as the first argument
export default connect(null, mapDispatchToProps)(CollectionItem);
