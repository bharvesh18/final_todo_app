import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdDelete} from "react-icons/md";
import { FaEdit} from "react-icons/fa";
const Tasks = () => {
  const [todo,setTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [comptodos,setcomptodos]=useState([]);
  const [editTask,setEditTask]=useState(null);
  useEffect(()=>{
    let todoString=localStorage.getItem("todos")
    let comptodostr=localStorage.getItem("comptodos")
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
    if(comptodostr){
      let comptodos=JSON.parse(localStorage.getItem("comptodos"))
      setcomptodos(comptodos)
    }
  },[])
  const addTask=()=>{
    if(editTask){
      const updatedTodos = todos.map(t => t.todo === editTask ? { ...t, todo: todo } : t);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setEditTask(null);
    }
    else{
      console.log(todo)
      const newtodos=[...todos,{todo:todo,isCompleted:false}];
      setTodos(newtodos)
      localStorage.setItem("todos", JSON.stringify(newtodos));
      saveToLS();
    }
    setTodo("");
  }
  const handleChange=(e)=>{
    setTodo(e.target.value);
  }
  const moveTodo=(e)=>{
    let task=e.target.name;
    let newtodo=todos.filter(t=>t.todo!=task);
    setTodos(newtodo);
    localStorage.setItem("todos", JSON.stringify(newtodo));
    newtodo=[...comptodos,{task,isCompleted:true}]
    setcomptodos(newtodo);
    localStorage.setItem("comptodos", JSON.stringify(newtodo));
  }
  const removeTodo=(e)=>{
    let task=e.target.name;
    console.log(task);
    let newtodo=comptodos.filter(ct=>ct.task!=task);
    setcomptodos(newtodo);
    localStorage.setItem("comptodos", JSON.stringify(newtodo));
    newtodo=[...todos,{todo:task,isCompleted:false}];
    setTodos(newtodo);
    localStorage.setItem("todos", JSON.stringify(newtodo));
  }
  const handleEdit=(e)=>{
    setEditTask(e.target.name);
    setTodo(e.target.name);
  }
  const deltodo=(e)=>{
    let t=e.target.name;
    console.log(t);
    let id=e.target.id;
    if(id=="not-comp"){
      let newtodo=todos.filter(ts=>ts.todo!=t);
      setTodos(newtodo);
      let updated=JSON.stringify(newtodo);
      localStorage.setItem("todos",updated);
    }
    else{
      let newtodo=comptodos.filter(ts=>ts.task!=t);
      setcomptodos(newtodo);
      let updated=JSON.stringify(newtodo);
      localStorage.setItem("comptodos",updated);
    }
  }
  return (
    <div>
      <div className="task-container">
        <div className='task-heading'>
            <h2>
                iTask - Manage your Todo's at one place
            </h2>
        </div>
        <div className='todo-box'>
            <label htmlFor="task"><h3>{editTask?"Update Todo":"Add Todo"}</h3></label>
            <input type="text" id="task" onChange={handleChange} value={todo}></input>
            <button onClick={addTask} className='todo-box-button' name={todo}><b>{editTask?"UPDATE":"SAVE"}</b></button>
        </div>
        {todos.length>0 && (
        <div className='show-tasks todo-box'>
            <h3>Your Tasks</h3>
              {todos.map(item=>{
                  return (
                      <div className='task-display' key={item.todo}>
                          <input type="checkbox" className='large-checkbox' name={item.todo} onChange={moveTodo} value={item.isCompleted}></input>
                          {item.todo}
                          <button className='del-btn' onClick={handleEdit} name={item.todo}><FaEdit/></button>
                          <button className='del-btn' id="not-comp" onClick={deltodo} name={item.todo}><MdDelete/></button>
                      </div>
                  )
              })}
        </div>
        )}
        {comptodos.length>0 && (
        <div className='show-tasks todo-box'>
            <h3>Completed Tasks</h3>
              {comptodos.map(item=>{
                  return (
                      <div className='task-display' key={item.task}>
                          <input type="checkbox" className='large-checkbox' name={item.task} onChange={removeTodo} value={item.isCompleted} checked></input>
                          <del>{item.task}</del>
                          <button className='del-btn' onClick={deltodo} name={item.task}><MdDelete/></button>
                      </div>
                  )
              })}
        </div>
        )}
        
        
      </div>
    </div>
  )
}

export default Tasks
