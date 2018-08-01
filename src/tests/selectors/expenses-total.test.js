import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    console.log(total);
    expect(total).toEqual(0);
});


test('should add all expenses totals', () => {
    const total = selectExpensesTotal(expenses);
    console.log(total);
    expect(total).toEqual(114195)
});

test('should add one expenses totals', () => {
    const total = selectExpensesTotal([expenses[1]]);
    console.log(total);
    expect(total).toEqual(109500)
});

test('should add two expenses totals', () => {
    const total = selectExpensesTotal([expenses[1], expenses[0]]);
    console.log(total);
    expect(total).toEqual(109695)
});