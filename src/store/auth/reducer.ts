import { Constants, DemoActions, IDemoState } from './types';
// import * as actions from './store/demo/actions';

const init: IDemoState = {
  list: ['aaa'],
  loading: false,
};

export function demoReducer(
  state: IDemoState = init,
  action: DemoActions,
): IDemoState {
  switch (action.type) {
    case Constants.SET_LOADING:
      return { ...state, ...action.payload };
    case Constants.ADD_ITEM:
      return { ...state, list: [...state.list, action.payload.item] };
    default:
      return state;
  }
}
