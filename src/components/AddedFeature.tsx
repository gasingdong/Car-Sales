import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../interfaces/CarInterfaces';

interface AddedFeatureProps {
  feature: Item;
}

const AddedFeature = (props: AddedFeatureProps): React.ReactElement => {
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

const mapStateToProps = (state: AddedFeatureProps): AddedFeatureProps => {
  return {
    feature: state.feature,
  };
};

export default connect(
  mapStateToProps,
  {}
)(AddedFeature);
