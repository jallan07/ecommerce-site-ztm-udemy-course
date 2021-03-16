import React, { Component } from 'react';
import SHOPDATA from './shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOPDATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {/* this allows you to destructure out the other collection props and pass them as props in one attribute as opposed to title={title} image={image}, etc. */}
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
