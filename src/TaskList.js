import React from "react";

function TaskList({tasks}){

return( 
<ul> {tasks.map((task)=>( <li key={task.id}>{task.title}</li> ))} </ul>

);
}
export default TaskList;