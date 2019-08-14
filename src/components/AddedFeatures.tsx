import React from 'react';
import { Car, Item } from '../interfaces/interfaces';
import AddedFeature from './AddedFeature';

interface AddedFeaturesProps {
  car: Car;
  removeItem: (item: Item) => void;
}

const AddedFeatures = (props: AddedFeaturesProps): React.ReactElement => {
  const { car, removeItem } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(
            (item): React.ReactElement => (
              <AddedFeature
                key={item.id}
                feature={item}
                removeItem={removeItem}
              />
            )
          )}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
