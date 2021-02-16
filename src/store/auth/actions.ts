import { action } from 'typesafe-actions';
import { Constants } from './types';

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
  });
}

export function addItemToList(item: string) {
  return action(Constants.ADD_ITEM, {
    item,
  });
}


