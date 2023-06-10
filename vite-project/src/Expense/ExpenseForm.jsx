import React, { useEffect } from "react";
import classes from "./ExpenseForm.module.css";
import { useState, useContext } from "react";
import Total from "./Total";
import CartContext from "../Store/CartContext";

const ExpenseForm = (props) => {
  const ctx = useContext(CartContext);
  const [name, setName] = useState();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  

  const moneyHandler = (event) => {
    setName(event.target.value)
  
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
    };
       let quantity = 0
       quantity = document.getElementById("total").value
       ctx.items.push(quantity)
   
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
        })
      .catch((error) => {
        console.log(error);
      });
  };

  // const getExpenses = (event) => {
  //   event.preventDefault();
  //     fetch("https://expensetreacker-default-rtdb.firebaseio.com/Items.json")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Failed to Fetch Items");
  //       }
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       ctx.items.push(data);
  //       const itemsArray = Object.values(data);
  //       setItem(itemsArray);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  
  return (
    <div>
       <Total/>
      <form className={classes.container}>
       <h2 className={classes.expense}> Add Your Expense</h2>
        <label className={classes.number}>Money:</label>
        <input type="number" min="100" max="1000"  id="total" onChange={moneyHandler} />
        <label className={classes.number}>Description:</label>
        <input type="text" onChange={descriptionHandler} />
        <label className={classes.number}>Category:</label>
        <select onChange={categoryHandler}>
          <option>Petrol</option>
          <option>Food</option>
          <option>Study</option>
          <option>Others</option>
        </select>
         {/* <br></br> */}
        <button onClick={formHandler} className={classes.button}>
          Add
        </button>
        {/* <button onClick={getExpenses} className={classes.button}>
          Get
        </button> */}
      </form>
    
     {/* <br></br> */}
    
    </div>
  );
};
export default ExpenseForm;
