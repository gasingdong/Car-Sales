import React from 'react';
import { Car } from '../interfaces/CarInterfaces';
import AddedFeature from './AddedFeature';

interface AddedFeaturesProps {
  car: Car;
}

const AddedFeatures = (props: AddedFeaturesProps) => {
  const { car } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;
