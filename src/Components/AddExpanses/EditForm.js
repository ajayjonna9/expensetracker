import React, { useEffect, useRef, useState } from "react";

import Card from "react-bootstrap/Card";
import "./AddExpense.css";

import { useDispatch, useSelector } from "react-redux";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";
import { themeActions } from "../Store/Reducers/TheamReducer";

const EditForm = () => {
  const editVal = useSelector((state) => state.theme.editVal);
  const [moneySpent, setMoneySpent] = useState(editVal.amount);
  const [description, setDescription] = useState(editVal.description);
  const [category, setCategory] = useState(editVal.category);
  const [loading, setLoading] = useState(false);

  const dispatcher = useDispatch();
  const onChangemoney = (e) => {
    setMoneySpent(() => e.target.value);
  };
  const onChangedes = (e) => {
    setDescription(() => e.target.value);
  };
  const onChangecategory = (e) => {
    setCategory(() => e.target.value);
  };

  const onEdit = (e) => {
    setLoading(() => true);
    e.preventDefault();
    const obj = {
      amount: moneySpent,
      description: description,
      category: category,
      id: editVal.id,
    };
    console.log(obj);
    dispatcher(expanseActions.editExpanse(obj));

    setLoading(() => false);
    dispatcher(themeActions.removeEdit());
  };
  return (
    <div className="expense">
      <Card>
        <Card.Body className="">
          <Card.Title className="m-4">Expense</Card.Title>

          <form onSubmit={onEdit}>
            <div className="mb-3">
              <div className="mb-3">
                <label forhtml="money" className="form-label">
                  Money Spent
                </label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">INR</span>
                  </div>
                  <input
                    id="money"
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={moneySpent}
                    onChange={onChangemoney}
                    required
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label forhtml="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={onChangedes}
                required
              />
            </div>

            <div className="input-group mt-5 mb-3">
              <label className="input-group-text" forhtml="inputGroupSelect01">
                Category
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                value={category}
                onChange={onChangecategory}
                required
              >
                <option value="" defaultValue>
                  Select
                </option>
                <option value="Car">Car</option>
                <option value="Movies">Movies</option>
                <option value="Food">Food</option>
                <option value="Petrol">Petrol</option>
              </select>
            </div>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            )}
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditForm;
