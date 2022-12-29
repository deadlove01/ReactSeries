import React, { useState } from "react";
import SHOP_DATA from "../data/ShopData";
import { CollectionPreview } from "../features/collection";

export const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
