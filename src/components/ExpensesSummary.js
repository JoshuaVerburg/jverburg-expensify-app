import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import totalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = (props) => (

  <div>
    <p>Viewing {props.expenses.length} expenses totalling {numeral(totalExpenses(props.expenses)/100).format("$0,0.00")}</p>
  </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters) 
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

