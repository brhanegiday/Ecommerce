import React from "react";

export const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;
  //0914754385
  return (
    <div className="container expense-list mb-2">
      <li className="row lead pb-0">
        <div className="info col-md-4">{charge}</div>
        <div className="info col-md-4">
          <span className="text-white bg-danger p-2">
            ${parseFloat(amount).toFixed(2)}
          </span>
        </div>
        <div className="col-md-4">
          <button
            className="alert alert-info mr-2"
            aria-label="edit button"
            onClick={() => handleEdit(id)}
          >
            Edit
          </button>
          <button
            className="alert ml-2 alert-danger"
            aria-label="delete button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </li>
    </div>
  );
};
