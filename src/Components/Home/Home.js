import Navbar from "./Navbar";
import "./Home.css";
import AddExpense from "../AddExpanses/AddExpense";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../Store/Reducers/AuthReducer";

const Home = () => {
  const expanse = useSelector((state) => state.expanse);
  const email = useSelector((state) => state.auth.userID);
  const isFirst = useSelector((state) => state.auth.isFirst);

  const dispatcher = useDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    if (isFirst) {
      dispatcher(authActions.isFirst());
      async function getData() {
        try {
          console.log(`${email}expense.json`);
          const res = await axios.get(
            `https://expensetracker-19ce3-default-rtdb.firebaseio.com/${email}expense.json`
          );

          console.log("fetch", res);
          if (res.data !== null) {
            console.log("dattttttt");
            console.log("aaaa", res.data.expansearr);
            dispatcher(expanseActions.assignDatabasData(res.data));
            console.log("success");
          }
        } catch (err) {
          alert("somthing  wrong");
        }
      }
      getData();
      return;
    }
    async function postData() {
      try {
        const res = await axios.put(
          `https://expensetracker-19ce3-default-rtdb.firebaseio.com/${email}expense.json`,
          expanse
        );
        console.log(expanse);
      } catch (err) {
        alert("somthing  wrong");
      }
    }
    postData();
  }, [expanse]);
  return (
    <>
      <Navbar />
      <AddExpense />
    </>
  );
};

export default Home;
