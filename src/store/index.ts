import { combineReducers, createStore } from 'redux';
import { demoReducer } from './auth/reducer';
import { IDemoState } from './auth/types';

export interface IRootState {
    demo: IDemoState;
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        demo: demoReducer,
    }),
);
export default store;
