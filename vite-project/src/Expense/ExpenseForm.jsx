import React from "react";
import classes from "./ExpenseForm.module.css";
import { useState, useContext } from "react";
import CartContext from "../Store/CartContext";

const ExpenseForm = (props) => {
  const ctx = useContext(CartContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [item, setItem] = useState([]);

  const moneyHandler = (event) => {
    setName(event.target.value);
  };

  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const categoryHandler = (event) => {
    setCategory(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();
    const obj = {
      money: name,
      description: description,
      category: category,
    ///  id: Math.random(),
    };

   
    //props.comingData(obj);
    fetch("https://expensetreacker-default-rtdb.firebaseio.com/Items.json", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((response) => {
        response.json().then((data)=>{
            const newObj = {...obj,data}
            props.comingData(newObj);
        })
        
        // ctx.items.push(response)
        //console.log(ctx.items)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getExpenses = (event) => {
    event.preventDefault();
      fetch("https://expensetreacker-default-rtdb.firebaseio.com/Items.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to Fetch Items");
        }
      })
      .then((data) => {
        console.log(data)
        ctx.items.push(data);
        const itemsArray = Object.values(data);
        setItem(itemsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  // onSubmit={formHandler}

  return (
    <div>
      <form className={classes.container}>
        <h2 className={classes.expense}> Add Your Expense</h2>
        <label className={classes.number}>Money:</label>
        <input type="number" min="100" max="1000" onChange={moneyHandler} />
        <label className={classes.number}>Description:</label>
        <input type="text" onChange={descriptionHandler} />
        <label className={classes.number}>Category:</label>
        <select onChange={categoryHandler}>
          <option>Petrol</option>
          <option>Food</option>
          <option>Study</option>
          <option>Others</option>
        </select>
        <br></br>
        <button onClick={formHandler} className={classes.button}>
          Add
        </button>
        <button onClick={getExpenses} className={classes.button}>
          Get
        </button>
      </form>
      <ul className={classes.items}>
        {item.map((items, index) => {
          //console.log(items)
          return (
            <li key={index}>
              {" "}
              Category: {items.category}-Description:{items.description} -
              Money:{items.money}
              {/* <button>EDIT</button>
              <button>DELETE</button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ExpenseForm;
