import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Item, StoreState, Car } from './interfaces/interfaces';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatureAction, removeFeatureAction } from './actions/actions';

const App = (): React.ReactElement => {
  const car = useSelector((state: StoreState): Car => state.car);
  const store = useSelector((state: StoreState): Item[] => state.store);
  const additionalPrice = useSelector(
    (state: StoreState): number => state.additionalPrice
  );
  const dispatch = useDispatch();

  const removeItem = (item: Item): void => {
    dispatch(removeFeatureAction(item));
  };

  const buyItem = (item: Item): void => {
    if (!car.features.find((feature): boolean => feature.id === item.id)) {
      dispatch(addFeatureAction(item));
    }
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeItem={removeItem} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} buyItem={buyItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

export default App;
