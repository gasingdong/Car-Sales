import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { Item } from '../interfaces/interfaces';

interface AdditionalFeaturesProps {
  store: Item[];
  buyItem: (item: Item) => void;
}

const AdditionalFeatures = (
  props: AdditionalFeaturesProps
): React.ReactElement => {
  const { store, buyItem } = props;

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(
            (item): React.ReactElement => (
              <AdditionalFeature
                key={item.id}
                feature={item}
                buyItem={buyItem}
              />
            )
          )}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
