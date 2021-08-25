import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  let initialExpenses = [];
  const [expenses, setExpenses] = useState(initialExpenses);
  const addNewExpenses = (newExpenseData) => {
    setExpenses((prevState) => {
      return [newExpenseData, ...prevState];
    });
  };

  const deleteExpense = (expense) => {
    setExpenses((prevState) => {
      const updatedExpenses = prevState.filter((element) => {
        return !(
          element.title === expense.title &&
          element.key === expense.key &&
          element.amount === expense.amount &&
          element.date === expense.date
        );
      });

      return updatedExpenses;
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpense={addNewExpenses} />
      <Expenses items={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
