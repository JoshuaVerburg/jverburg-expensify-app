import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should set up remove expense action object', () =>{
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual( {
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense action object', () => {
   const action = editExpense('123', {note: 'new note value'});
   expect(action).toEqual( {
       type: 'EDIT_EXPENSE',
       id: '123',
       updates: {
           note: 'new note value'
       }
   })

});

test('should set up add expense object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note:'this was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

});

test('should set up add expense object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            note: '',
            createdAt: 0,
            id: expect.any(String)
        }
    })
});