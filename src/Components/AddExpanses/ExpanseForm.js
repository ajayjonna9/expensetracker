import React, { useEffect, useRef, useState } from "react";

import Card from "react-bootstrap/Card";
import "./AddExpense.css";

import { useDispatch, useSelector } from "react-redux";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";
import { useNavigate } from "react-router-dom";

const ExpanseForm = () => {
  const [moneySpent, setMoneySpent] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);

  const darkTheme = useSelector((state) => state.theme.darkTheme);

  const expansearr = useSelector((state) => state.expanse.expansearr);
  const isLoggedin = useSelector((state) => state.auth.isLoggedin);

  // console.log(totalSpend);
  const dispatcher = useDispatch();
  const navigator = useNavigate();

  const onChangemoney = (e) => {
    setMoneySpent(() => e.target.value);
  };
  const onChangedes = (e) => {
    setDescription(() => e.target.value);
  };
  const onChangecategory = (e) => {
    setCategory(() => e.target.value);
  };
  const onAddExpanse = (e) => {
    if (!isLoggedin) {
      navigator("/login");
      return;
    }

    e.preventDefault();
    setLoading(true);
    const obj = {
      money: moneySpent,
      des: description,
      category: category,
    };
    console.log(obj);
    dispatcher(expanseActions.addExpanse(obj));

    console.log(expansearr);
    setLoading(false);
  };
  return (
    <div className="expense">
      <Card>
        <Card.Body className={darkTheme ? "darktheme" : undefined}>
          <Card.Title className="m-4">Expense</Card.Title>

          <form onSubmit={onAddExpanse}>
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

            <button type="submit" className="btn btn-primary">
              {loading ? "Loading..." : "Add Expense"}
            </button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ExpanseForm;
