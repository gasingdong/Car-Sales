import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Item } from './interfaces/CarInterfaces';
import { reducer } from './reducers/CarReducer';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (): React.ReactElement => {
  const store = createStore(reducer);

  const removeFeature = (item: Item): void => {
    // dispatch an action here to remove an item
  };

  const buyItem = (item: Item): void => {
    // dipsatch an action here to add an item
  };

  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </Provider>
  );
};

export default App;
