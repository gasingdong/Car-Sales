import React from 'react';
import { Item } from '../interfaces/interfaces';

interface AdditionalFeatureProps {
  feature: Item;
  buyItem: (feature: Item) => void;
}

const AdditionalFeature = (
  props: AdditionalFeatureProps
): React.ReactElement => {
  const { feature, buyItem } = props;

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        type="button"
        className="button"
        onClick={(): void => buyItem(feature)}
      >
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default AdditionalFeature;
