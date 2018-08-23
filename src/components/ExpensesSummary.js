import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import totalExpenses from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';


export const ExpensesSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totalling <span>{numeral(totalExpenses(props.expenses)/100).format("$0,0.00")}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
            
        </div>
        )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters) 
    };
};

export default connect(mapStateToProps)(ExpensesSummary);

