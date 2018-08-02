import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import totalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return(
        <div>
            <h1>Viewing {props.expenses.length} {expenseWord} totalling {numeral(totalExpenses(props.expenses)/100).format("$0,0.00")}</h1>
        </div>
        )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters) 
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

