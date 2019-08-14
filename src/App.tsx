import React from 'react';

import { connect } from 'react-redux';
import { Item, StoreState } from './interfaces/interfaces';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatureAction, removeFeatureAction } from './actions/actions';

interface AppProps {
  addFeature: (feature: Item) => void;
  removeFeature: (feature: Item) => void;
}

const App = (props: StoreState & AppProps): React.ReactElement => {
  const { car, store, addFeature, removeFeature } = props;

  const removeItem = (item: Item): void => {
    removeFeature(item);
  };

  const buyItem = (item: Item): void => {
    addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState): StoreState => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store,
  };
};

export default connect(
  mapStateToProps,
  { addFeature: addFeatureAction, removeFeature: removeFeatureAction }
)(App);
