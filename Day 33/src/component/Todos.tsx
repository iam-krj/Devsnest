import React, { useState } from "react";
import Todolist from "./Todolist";

interface TodoType {
  title: string;
  done: boolean;
}


const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [input, setInput] = useState<string>("");
    return (
        <div className="todos">
            <input className="inp" type="text" value={input} onChange={(e) => {
                    setInput(e.target.value);
                }}/>
            <button className="bt" onClick={() => {
                setTodos([
                    ...todos,
                    {title : input, done: false},
                ])
                setInput("");
        }}><span>Add</span></button>  
        {todos.map((todo, index) => (
          <Todolist title={todo.title} done={todo.done} />
        ))}
      </div>
    );
}

export default Todos;