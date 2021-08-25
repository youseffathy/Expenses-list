import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  const deleteExpense = (expense) => {
    props.deleteExpense(expense);
  };
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem expense={expense} deleteExpense={deleteExpense} />
      ))}
    </ul>
  );
};

export default ExpensesList;
