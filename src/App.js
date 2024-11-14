import React, {Component} from 'react';
import TaskList from './TaskList';


class TaskManager extends Component{
    constructor (props){
    super (props);
    this.state = {
    tasks: [
            {id: 1, title: 'Learn React', completed: false},
            {id: 2, title: 'Watering plants', completed: true},
            {id: 2, title: 'Going for walk', completed: true},
            ],

        };
    }

render(){
return(

<div>
    <h1>Task Manager</h1>
    <ul>
        {this.state.tasks.map((task)=>( <li key={task.id}>{task.title}</li>
        ))}
    </ul>

<div>
<h1>TaskList</h1>
<TaskList tasks={this.state.tasks}/>
</div>
</div>
);
}
}

export default TaskManager;