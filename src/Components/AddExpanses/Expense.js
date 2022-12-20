import React from "react";
import { Button } from "react-bootstrap";
import "./Expanse.css";

import { themeActions } from "../Store/Reducers/TheamReducer";
import { useDispatch, useSelector } from "react-redux";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";

const Expense = (props) => {
  const dispatcher = useDispatch();
  const oneditExpanse = () => {
    const obj = {
      amount: props.money,
      description: props.des,
      category: props.category,
      id: props.id,
    };
    console.log(obj);

    dispatcher(themeActions.isEdited(obj));
  };
  const onDeleteExpanse = () => {
    dispatcher(expanseActions.deleteExpanse(props.id));
  };

  return (
    <>
      <tr>
        <td>{props.money}</td>
        <td>{props.des}</td>
        <td>{props.category}</td>
        <td>
          <Button
            variant="primary"
            className="editdeletebtn"
            onClick={oneditExpanse}
          >
            Edit
          </Button>

          <Button variant="danger" onClick={onDeleteExpanse}>
            Remove
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Expense;
