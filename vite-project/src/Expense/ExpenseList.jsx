import React, {  useState,useEffect } from "react";
import classes from './ExpenseList.module.css'


const ExpenseList = (props) =>{
    const[items,setItems] = useState([])
  console.log(props.onSend)
  console.log(items) 
  
  useEffect(() => {
    setItems(props.onSend);
  }, [props.onSend])

    
   const deleteHandler = (key) =>{
    // event.preventDefault()
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
              console.log(updatedData)
             setItems(updatedData)
         }).catch(()=>{
             console.log("error")
         })
        
        }
        
       // console.log(items)
   
    return(
    <div className={classes.container}>
        {items.map((item,index)=>{
          console.log(item)
         const key =   item.data.name //item.data.name 
         console.log(key)
            return <li className={classes.expenseitem}  key={index}> Description: {item.description} - Category:{item.category} - Money: {item.money}$  
            <button className={classes.button}>EDIT</button>
            <button onClick={()=>deleteHandler(key)} className={classes.button}>DELETE</button> </li>
        })}
    </div>
   )
}

 export default ExpenseList