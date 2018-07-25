import {createStore} from 'redux'

//Action generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count = 1} = {}) => ({
   type: 'SET',
   count
});

const resetCount = () => ({
   type: 'RESET'
});

//reducers
//reducers are pure functions ==> output depends on the input
//never change state or action

const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsub =store.subscribe(() => {
   console.log(store.getState())
});

// Actions- an a=object that gets sent to the store

//increment
/*store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});*/

store.dispatch(incrementCount({ incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));


store.dispatch(setCount({count: 102}));