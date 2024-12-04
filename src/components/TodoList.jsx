import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, removeTask, moveUp, moveDown }) {

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul className="list-group">
                {tasks.map((task, index) => (
                    <TodoItem 
                    key={index} 
                    task={task} 
                    onRemove={() => removeTask(task)} 
                    onMoveUp={() => moveUp(index)}
                    onMoveDown={() => moveDown(index)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;