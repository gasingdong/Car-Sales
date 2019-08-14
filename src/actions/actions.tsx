import { Item } from '../interfaces/interfaces';

export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export interface FeatureAction {
  type: string;
  payload: Item;
}

export const addFeatureAction = (feature: Item): FeatureAction => {
  return {
    type: ADD_FEATURE,
    payload: feature,
  };
};

export const removeFeatureAction = (feature: Item): FeatureAction => {
  return {
    type: REMOVE_FEATURE,
    payload: feature,
  };
};
