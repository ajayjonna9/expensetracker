import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import axios from "axios";
// function MyVerticallyCenteredModal(props) {
//   const moneySpent = useRef();
//   const description = useRef();
//   const category = useRef();
//   const editExpanse = async () => {
//     try {
//       const obj = {
//         money: moneySpent.current.value,
//         des: description.current.value,
//         category: category.current.value,
//         id: id,
//       };

//       const res = await axios.put(
//         `https://expensetracker-19ce3-default-rtdb.firebaseio.com/expensedata/${id}.json`,
//         obj
//       );
//     } catch (err) {}
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Card>
//           <Card.Body>
//             <Card.Title className="m-4">Expense</Card.Title>
//             <form onSubmit={editExpanse}>
//               <div className="mb-3">
//                 <label forhtml="money" className="form-label">
//                   Money Spent
//                 </label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="money"
//                   ref={moneySpent}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <label forhtml="description" className="form-label">
//                   Description
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="description"
//                   ref={description}
//                   required
//                 />
//               </div>

//               <div className="input-group mt-5 mb-3">
//                 <label
//                   className="input-group-text"
//                   forhtml="inputGroupSelect01"
//                 >
//                   Category
//                 </label>
//                 <select
//                   className="form-select"
//                   id="inputGroupSelect01"
//                   ref={category}
//                   required
//                 >
//                   <option value="" defaultValue>
//                     Select
//                   </option>
//                   <option value="Car">Car</option>
//                   <option value="Movies">Movies</option>
//                   <option value="Food">Food</option>
//                   <option value="Petrol">Petrol</option>
//                 </select>
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Add Expense
//               </button>
//             </form>
//           </Card.Body>
//         </Card>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

const Expense = (props) => {
  //   const [modalShow, setModalShow] = React.useState(false);
  const oneditExpanse = () => {
    // const obj = {
    //     money: props.category,
    //     des: props.des,
    //     category: props.money,
    //     id: props.id,
    //   };
    //   <MyVerticallyCenteredModal
    //       show={modalShow} obj={obj} />
    //    onHide={() => setModalShow(false)}
    props.edit(props.id, props.money, props.des, props.category);
  };
  const onDeleteExpanse = () => {
    props.delete(props.id);
  };

  return (
    <>
      <tr>
        <td>{props.money}</td>
        <td>{props.des}</td>
        <td>{props.category}</td>
        <td>
          <Button variant="primary" onClick={oneditExpanse}>
            Edit
          </Button>
          <Button variant="danger" onClick={onDeleteExpanse}>
            Danger
          </Button>
        </td>
      </tr>
    </>
  );
};

export default Expense;
