import { Item } from '../interfaces/interfaces';

export const ADD_FEATURE = 'ADD_FEATURE';

export interface FeatureAction {
  type: string;
  payload: Item;
}

export const addFeatureAction = (feature: Item): FeatureAction => {
  console.log('add feature action');
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};
