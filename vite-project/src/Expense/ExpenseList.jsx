import React, {useState, useEffect} from "react";
import classes from './ExpenseList.module.css'


const ExpenseList = (props) =>{
    const[items,setItems] = useState([])
 // console.log(props.onSend)
  //console.log(items) 
  
  useEffect(() => {
    setItems(props.onSend);
  }, [props.onSend])

    
   const deleteHandler = (key,event) =>{
     event.preventDefault()
    console.log(key)
      fetch (`https://expensetreacker-default-rtdb.firebaseio.com/Items/${key}.json`,{
         method: 'DELETE',
         headers:{
           "Content-Type" : "Application/json"
         }

         }).then(()=>{
             console.log("success")
             const updatedData = items.filter((item)=>{
                return item.data.name !== key
             })
             // console.log(updatedData)
             setItems(updatedData)
         }).catch(()=>{
             console.log("error")
         })
        
        }
        
       // console.log(items)
   
    return(
      <div className={classes.container}>  
      {items.map((item, index) => (
        <li className={classes.expenseitem} key={index}>
          <span className={classes.expenseitemdescription}>Description: {item.description}</span>
          <span className={classes.expenseitemcategory}>Category: {item.category}</span>
          <span className={classes.expenseitemmoney}>Money: {item.money}$</span>
          <button onClick={(event) => deleteHandler((item.data.name),event)} className={classes.button}>X</button>
        </li>
      ))}
    </div>
   )
}

 export default ExpenseList