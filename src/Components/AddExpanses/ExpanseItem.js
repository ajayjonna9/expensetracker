import React from "react";
import Card from "react-bootstrap/Card";
import "./AddExpense.css";
import Expense from "./Expense";
import { themeActions } from "../Store/Reducers/TheamReducer";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { expanseActions } from "../Store/Reducers/ExpenseReducer";
import Model from "../ModelForm/Model";

const ExpanseItem = () => {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const expansearr = useSelector((state) => state.expanse.expansearr);
  const totalSpend = useSelector((state) => state.expanse.totalSpend);
  const dispatcher = useDispatch();
  const onPremium = () => {
    dispatcher(themeActions.addDarkTheme());
    console.log(expansearr);
  };
  const onToggle = () => {
    dispatcher(themeActions.toggledarkTheme());
    console.log(expansearr);
  };
  const makeCSV = (data) => {
    const csvRows = [];
    const headers = [];
    for (let i in data[0]) {
      if (i !== "id") {
        headers.push(i);
      }

      console.log("hh");
    }
    csvRows.push(headers);
    console.log("head", headers);

    for (let i of data) {
      const values = headers.map((id) => i[id]);
      csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
  };
  const blob = new Blob([makeCSV(expansearr)]);
  const url = URL.createObjectURL(blob);

  const deleteExpanse = (id) => {
    dispatcher(expanseActions.deleteExpanse(id));
  };
  return (
    <>
      {expansearr.length > 0 && (
        <Card className="mt-5">
          <Card.Body className={darkTheme ? "darktheme" : undefined}>
            {totalSpend > 10000 && (
              <Button onClick={onPremium} className="m-2">
                Premium
              </Button>
            )}
            {totalSpend > 1000 && darkTheme && (
              <Button onClick={onToggle} className="m-2">
                Normal Theme
              </Button>
            )}
            {totalSpend > 1000 && (
              <a
                className="btn btn-info m-2"
                role="button"
                href={url}
                download="Expanse.csv"
              >
                Download
              </a>
            )}
            <Card.Title className="m-4">Expenses</Card.Title>
            <table className="table table-success table-striped">
              <thead>
                {console.log(totalSpend)}
                <tr>
                  <th>Amount</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {console.log("expcomp", expansearr)}
                {expansearr.map((ele) => {
                  return (
                    <Expense
                      key={ele.id}
                      money={ele.amount}
                      des={ele.description}
                      category={ele.category}
                      id={ele.id}
                      delete={deleteExpanse}
                    />
                  );
                })}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default ExpanseItem;
