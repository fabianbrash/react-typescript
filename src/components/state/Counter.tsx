import React, { useReducer } from 'react'

type CounterState = {
    count: number;
}
/*type CounterAction = {
    type: string,
    payload: number
}*/

type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset',
}
const initialState = {
    count: 0
}

/* type CounterAction = {
    type: 'increment' | 'decrement' | 'reset',
    payload?: number
}*/

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterState, action: CounterAction) {

    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            if(state.count <= 0) {
                return {...state, count: 0 } 
            }else{
                return { count: state.count - action.payload }
            }
        case 'reset':
            return initialState
            
        default:
            return state
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10 })}>
                Increment 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset Count
            </button>
        </div>
    )
}

export default Counter
