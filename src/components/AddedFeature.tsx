import React from 'react';
import { Item } from '../interfaces/interfaces';

interface AddedFeatureProps {
  feature: Item;
  removeItem: (item: Item) => void;
}

const AddedFeature = (props: AddedFeatureProps): React.ReactElement => {
  const { feature, removeItem } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button
        type="button"
        className="button"
        onClick={(): void => removeItem(feature)}
      >
        X
      </button>
      {feature.name}
    </li>
  );
};

export default AddedFeature;
