import React, { useReducer } from 'react';

const initialState = {
    count: 0,
};

const INCREMENT = "INCREMENT";
const INCREMENTBYAMOUNT = "INCREMENTBYAMOUNT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

type IncrementActionType = {type: 'INCREMENT'};
type DecrementActionType = {type: 'DECREMENT'};
type ResetActionType = {type: 'RESET'};
type IncrementByAmountActionType = {type: 'INCREMENTBYAMOUNT', payload: number};

type CounterActionType = IncrementActionType | DecrementActionType | ResetActionType | IncrementByAmountActionType;

const reducer = (state: typeof initialState, action: CounterActionType) => {
    switch(action.type){
        case INCREMENT:
            return {count: state.count + 1};
        case INCREMENTBYAMOUNT:
            return {count: state.count + action.payload};
        case DECREMENT:
            return {count: state.count - 1};
        case RESET:
            return {count: 0};
        default:
        return state;
    }
}

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>UseReducer Hook</h3>

            <h3>Count - {state.count}</h3>
            <button onClick={() => dispatch({type: INCREMENT})}>Increment ➕</button>
            <button onClick={() => dispatch({type: RESET})}>Reset ⭕</button>
            <button onClick={() => dispatch({type: DECREMENT})}>Decrement ➖</button>
            <button onClick={() => dispatch({type: INCREMENTBYAMOUNT, payload: 5})}>Increment By Amount 5 ➕</button>
        </div>
    );
}

export default UseReducer;