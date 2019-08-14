import React from 'react';
import { connect } from 'react-redux';
import { Item } from '../interfaces/CarInterfaces';

interface AdditionalFeatureProps {
  feature: Item;
}

const AdditionalFeature = (
  props: AdditionalFeatureProps
): React.ReactElement => {
  const { feature } = props;
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button type="button" className="button">
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

const mapStateToProps = (
  state: AdditionalFeatureProps
): AdditionalFeatureProps => {
  return {
    feature: state.feature,
  };
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeature);
