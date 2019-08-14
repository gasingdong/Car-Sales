import React from 'react';
import { connect } from 'react-redux';
import { Car } from '../interfaces/CarInterfaces';
import AddedFeature from './AddedFeature';

interface AddedFeaturesProps {
  car: Car;
}

const AddedFeatures = (props: AddedFeaturesProps): React.ReactElement => {
  const { car } = props;
  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(
            (item): React.ReactElement => (
              <AddedFeature key={item.id} />
            )
          )}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: AddedFeaturesProps): AddedFeaturesProps => {
  return {
    car: state.car,
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeatures);
