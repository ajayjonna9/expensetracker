import React from "react";

const Expense = (props) => {
  return (
    <>
      <tr>
        <td>{props.money}</td>
        <td>{props.des}</td>
        <td>{props.category}</td>
      </tr>
    </>
  );
};

export default Expense;
