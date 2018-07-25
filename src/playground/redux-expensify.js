import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}= {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }

});

const removeExpense = ({id} = {}) => ({
   type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
   type: 'SORT_BY_DATE'
});

const setStartDate = (start = undefined) => ({
  type: 'SET_START_DATE',
  start
});


const setEndDate = (end = undefined) => ({
    type: 'SET_END_DATE',
    end
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense
                }
            });
        default:
            return state;
    }
};


// Filters reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};



const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.start
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.end
            };
        default:
            return state;
    }
};

//timestamps
// January 1st 1970 (unix epoch)
// milliseconds after this date


// Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLocaleLowerCase().includes(text.toLowerCase());

        //

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })

};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));


//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store.dispatch(setTextFilter('rent'));
//store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setStartDate(125));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'poasdofgasd',
        description: 'Jan Rent',
        note: 'this was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //Date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'jen',
    age: 45
};