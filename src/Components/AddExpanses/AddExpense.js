import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import "./AddExpense.css";
import Expense from "./Expense";
import Table from "react-bootstrap/Table";
import axios from "axios";

const AddExpense = () => {
  const moneySpent = useRef();
  const description = useRef();
  const category = useRef();
  const [expensearr, setExpensearr] = useState([]);
  const onAddExpanse = async (e) => {
    e.preventDefault();
    const obj = {
      money: moneySpent.current.value,
      des: description.current.value,
      category: category.current.value,
    };
    console.log(obj);

    try {
      const res = await axios.post(
        "https://expensetracker-19ce3-default-rtdb.firebaseio.com/expensedata.json",
        obj
      );
      console.log(res);
      const newobj = {
        ...obj,
        id: res.data.name,
      };
      setExpensearr((pre) => {
        return [...pre, obj];
      });
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  useEffect(() => {
    async function getdata() {
      try {
        const res = await axios.get(
          "https://expensetracker-19ce3-default-rtdb.firebaseio.com/expensedata.json"
        );
        console.log(res.data);
        for (let i in res.data) {
          console.log(i);
          setExpensearr((pre) => {
            const newobj = {
              ...res.data[i],
              id: i,
            };
            return [...pre, newobj];
          });
        }
      } catch (err) {
        alert("somthing went wrong");
      }
    }
    getdata();
  }, []);
  return (
    <div className="expense">
      <Card>
        <Card.Body>
          <Card.Title className="m-4">Expense</Card.Title>
          <form onSubmit={onAddExpanse}>
            <div className="mb-3">
              <label forhtml="money" className="form-label">
                Money Spent
              </label>
              <input
                type="number"
                className="form-control"
                id="money"
                ref={moneySpent}
                required
              />
            </div>
            <div className="mb-3">
              <label forhtml="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                ref={description}
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
                ref={category}
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
              Add Expense
            </button>
          </form>
        </Card.Body>
      </Card>
      <Card className="mt-5">
        <Card.Body>
          <Card.Title className="m-4">Expenses</Card.Title>
          <table className="table table-success table-striped">
            <thead>
              <tr>
                <th>money</th>
                <th>description</th>
                <th>category</th>
              </tr>
            </thead>
            <tbody>
              {expensearr.map((ele) => {
                return (
                  <Expense
                    key={ele.id}
                    money={ele.money}
                    des={ele.des}
                    category={ele.category}
                  />
                );
              })}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddExpense;
