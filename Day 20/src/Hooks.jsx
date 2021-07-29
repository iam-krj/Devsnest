import React, { useState, useEffect } from "react";
import "./Hooks.css";
import "./Cardi";


const App = ({todo, todos, setTodos, index}) => {
    return (
        <div className="todo">
            <h1>{todo}</h1>
            <button
            onClick={()=>{
                console.log("Delete = ", todo);
                const newTodos = todos.filter((el, i) => i !=index);
                setTodos(newTodos);
            }}
            >
                Delete
                </button>
        </div>
    );
};

// export default App;

function Hooks(props) {
 
    const [value, setValue]= useState("");
    const[todos, setTodos] = useState(
                [   "hola"," 60", "Dominogs",
            "jola"," 670", "Dominghos",
            "lola"," 6780", "Domighjnos"
        
        // <Cardi tittle="Pizza" calorie="60" />,
        // <Cardi tittle="Burger" calorie="69" />,
        // <Cardi tittle="Coke" calorie="600" />,
        // <Cardi tittle="Browne" calorie="180" />,
        // <Cardi tittle="Fried Rice" calorie="90" />,
        // <Cardi tittle="Pani Puri" calorie="10" />,
        // <Cardi tittle="Dosa" calorie="800" />,
        // <Cardi tittle="Apple" calorie="50" />,
        // <Cardi tittle="Rice" calorie="90" />,
        // <Cardi tittle="Puri" calorie="10" />,
    


          ]
            );
  
    return(
        <div className="Hooks">
            <h1 className="Title"> Calorie Read Only</h1>
            <div className="container">
            {/* <input type="text" onChange={(e) =>
          {  setValue(e.target.value);
            }
         } 
         value = {value}
         /> */}
            {/* <button onClick={()=>
            {setTodos([...todos, value]);
            setValue("");
             }
            }>
                Add
                </button> */}

            {todos.map((todo, index) => (
                <App key={index} todo={todo} todos ={todos} setTodos={setTodos} index={index} />
                )
             ) }
            </div>
            </div>
            )
}


export default Hooks;