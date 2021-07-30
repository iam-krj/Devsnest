import React, { useState, useEffect } from "react";
import "./Hooks.css";



const App = ({todo, todos, setTodos, tom, setTom, index}) => {
    return (
        <div className="todo">
            <h1>{todo}</h1>
            <button className="Badass"
            onClick={()=>{
                console.log("Delete = ", todo);
                const newTodos = todos.filter((el, i) => i !=index);
                // console.log("Delete = ", tom);
                // const newTom = tom.filter((el, j) => j !=index);
                setTodos(newTodos);
                // setTom(newTom);
            }}
            >
                Delete
                </button>


                <button className="Badasss"
            onClick={()=>{
                console.log("Delete = ", todo);
                const newTodos = todos.filter((el, i) => i !=index);
                setTodos(newTodos);
            }}
            >
                Edit
                </button>
        </div>
    );
};

function Hooks(props) {
 
    const [value, setValue]= useState("");
    const[vaalue,setVaalue]=useState("");
    const[todos, setTodos] = useState([ ]);
    const[tom,setTom] =useState([ ]);
  
    return(
        <div className="Hooks">
            <h1 className="Title"> Editable Menu</h1>
            <div className="container">
           
            <input type="text" onChange={(e) =>
          {  setValue(e.target.value);
            }
         } 
         value = {value}
         />

            <input className="Bada" type="text" onChange={(e) =>
          {  setVaalue(e.target.value);
            }
         } 
         vaalue = {vaalue}
         />


            <button className="Badas" onClick={()=>
            {setTodos([...todos, value]);
            setValue("");
            setTom([...tom, vaalue]);
            setVaalue("");
             }
            }>
                Add
                </button>

                

<br />

            {todos.map((todo, index) => (
                <App key={index} todo={todo} todos ={todos}  setTodos={setTodos} index={index} />
                )
             ) }
             
             {tom.map((todo, index) => (
                <App key={index} todo={todo} tom ={tom}  setTom={setTom} index={index} />
                )
             ) }
              


            </div>
            </div>
            )
}


export default Hooks;