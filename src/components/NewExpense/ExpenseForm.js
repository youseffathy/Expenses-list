import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formState, setFormState] = useState({ title: "", amount: "", date: "" });

  const formOnChangeHandler = (event) => {
    if (event.target.id === "Expense title") {
      setFormState((prevState) => {
        return { ...prevState, title: event.target.value };
      });
    } else if (event.target.id === "Expense amount") {
      setFormState((prevState) => {
        return { ...prevState, amount: event.target.value };
      });
    } else if (event.target.id === "Expense date") {
      setFormState((prevState) => {
        return { ...prevState, date: event.target.value };
      });
    }
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      key: Math.random(),
      ...formState,
      amount: parseInt(formState.amount, 10),
      date: new Date(formState.date),
    };
    props.onSaveNewExpense(formData);
    setFormState({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="Expense title">Title</label>
          <input
            type="text"
            id="Expense title"
            value={formState.title}
            onChange={formOnChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="Expense amount">Amount</label>
          <input
            type="number"
            id="Expense amount"
            value={formState.amount}
            min="0.01"
            step="0.01"
            onChange={formOnChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label for="Expense date">Date</label>
          <input
            type="date"
            id="Expense date"
            value={formState.date}
            min="2019-01-01"
            max="2022-12-31"
            onChange={formOnChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
