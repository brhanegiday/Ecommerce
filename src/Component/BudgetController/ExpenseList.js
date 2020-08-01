import React from "react";
import { ExpenseItem } from "./ExpenseItem";
export const ExpenseList = ({
  expenses,
  clearItems,
  handleDelete,
  handleEdit,
}) => {
  return (
    <React.Fragment>
      <ul>
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              key={expense.id}
              expense={expense}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button
          className="btn-clear alert alert-danger btn btn-lg btn-danger"
          onClick={clearItems}
        >
          Clear Expenses
        </button>
      )}
    </React.Fragment>
  );
};
