import React, { useState } from 'react'
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_DATA from '../../data/shopdata'

const Shop = () => {

const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
  )
}

export default Shop
