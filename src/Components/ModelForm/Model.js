import React from "react";
import "./Model.css";

import { useDispatch, useSelector } from "react-redux";
import ExpanseForm from "../AddExpanses/ExpanseForm";
import { Button } from "react-bootstrap";
import { themeActions } from "../Store/Reducers/TheamReducer";
import EditForm from "../AddExpanses/EditForm";
const Model = () => {
  const dispatcher = useDispatch();
  const onClosse = () => {
    dispatcher(themeActions.removeEdit());
  };

  return (
    <>
      <div className="back" onClick={onClosse}></div>
      <div className="mod">
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClosse}
        ></button>
        <EditForm />
      </div>
    </>
  );
};

export default Model;
