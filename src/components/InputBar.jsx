import ButtonAdd from "./buttonAdd";
import { useState } from "react";

function InputBar({ addTask }) {
    
    const [newTask, setNewTask] = useState("") 

    function handleAddTask() {
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask(''); // Clear the input after adding
        }
    };

    return (
        
        <form onSubmit={(e) => {
            e.preventDefault();
            handleAddTask();
        }}>
            
            <input 
                type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="What's next??" 
                />
                <ButtonAdd onAddTask={handleAddTask} />

        </form>
    
)
}
export default InputBar;