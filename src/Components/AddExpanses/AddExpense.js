import React, { useEffect, useRef, useState } from "react";

import Card from "react-bootstrap/Card";
import "./AddExpense.css";

import { useDispatch, useSelector } from "react-redux";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";
import ExpanseItem from "./ExpanseItem";
import ExpanseForm from "./ExpanseForm";
import Model from "../ModelForm/Model";

const AddExpense = () => {
  //  https://meet.google.com/qjx-eaqc-hyo

  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const isEdit = useSelector((state) => state.theme.edit);

  return (
    <div className={darkTheme ? "darktheme" : undefined}>
      {isEdit && <Model />}
      <div className="d-flex flex-column">
        <ExpanseForm />
        <div className="expanseItem">
          <ExpanseItem></ExpanseItem>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
