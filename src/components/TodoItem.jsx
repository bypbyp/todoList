import React from 'react';

function TodoItem({ task, onRemove, onMoveDown, onMoveUp }) {
    return (
        <li className="todoIt">
            {task}
            <div className="buttonContainer">
                <button className="btnRemove" onClick={onRemove}>
                    Remove
                </button>
                <button className="btnUp" onClick={onMoveUp}>
                    Up
                </button> 
                
                <button className="btnDown" onClick={onMoveDown}>
                    Down
                </button>
            </div>
        </li>
    );
}

export default TodoItem;