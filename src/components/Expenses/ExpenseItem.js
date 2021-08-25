import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const deleteExpense = (event) => {
    props.deleteExpense(props.expense);
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expense.date} />
        <div className="expense-item__description">
          <h2>{props.expense.title} </h2>
          <div className="expense-item__price">{"$" + props.expense.amount.toString()}</div>
          <a href="#" class="myButton" onClick={deleteExpense}>
            Delete
          </a>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
