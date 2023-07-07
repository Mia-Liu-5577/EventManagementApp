import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNTER_ACTION_STARTED, COUNTER_ACTION_FINISHED } from "./TestConstants";
import {createReducer} from '../../app/common/util/reducerUtil'

const initialState = {
    data: 34,
    loading: false
};


export const incrementCounter = (state, payload) => {
    return { ...state, data: state.data + 1 };
};

export const decrementCounter = (state, payload) => {
    return { ...state, data: state.data - 1 };
};

export const counterActionStarted = (state, payload) => {
    return {...state, loading: true}
};

export const counterActionFinished = (state, payload) => {
    return {...state, loading: true}
};

export default createReducer(initialState, {
    [INCREMENT_COUNTER]: incrementCounter,
    [DECREMENT_COUNTER]: decrementCounter,
    [COUNTER_ACTION_STARTED]: counterActionStarted,
    [COUNTER_ACTION_FINISHED]: counterActionFinished
});

