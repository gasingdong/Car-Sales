import React from 'react';
import { Item } from '../interfaces/CarInterfaces';

interface AddedFeature {
  feature: Item;
}

const AddedFeature = (props: AddedFeature) => {
  const { feature } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button type="button" className="button">
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
