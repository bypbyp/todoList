import React from "react";
function ButtonAdd({ onAddTask }){


    return(
       <button 
        type="button" 
        className="btnAdd"
        onClick={onAddTask}>
            Add
        </button>
    );
}

export default ButtonAdd;