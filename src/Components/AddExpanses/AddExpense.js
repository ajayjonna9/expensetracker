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
  const [moneySpent, setMoneySpent] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [expensearr, setExpensearr] = useState([]);
  const onChangemoney = (e) => {
    setMoneySpent(() => e.target.value);
  };
  const onChangedes = (e) => {
    setDescription(() => e.target.value);
  };
  const onChangecategory = (e) => {
    setCategory(() => e.target.value);
  };
  const onAddExpanse = async (e) => {
    e.preventDefault();
    const obj = {
      money: moneySpent,
      des: description,
      category: category,
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
        return [...pre, newobj];
      });
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  const editExpanse = async (id, amount, des, category) => {
    try {
      const obj = {
        money: amount,
        des: des,
        category: category,
        id: id,
      };
      deleteExpanse(id);
      setMoneySpent(amount);
      setCategory(category);
      setDescription(des);
    } catch (err) {
      alert("somthing went wrong");
    }
  };
  const deleteExpanse = async (id) => {
    try {
      const res = await axios.delete(
        "https://expensetracker-19ce3-default-rtdb.firebaseio.com/expensedata/" +
          id +
          ".json"
      );
      console.log(res);
      setExpensearr((pre) => {
        const newpre = pre.filter((ele) => {
          return ele.id !== id;
        });
        return [...newpre];
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
                value={moneySpent}
                onChange={onChangemoney}
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
                <th></th>
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
                    id={ele.id}
                    delete={deleteExpanse}
                    edit={editExpanse}
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
