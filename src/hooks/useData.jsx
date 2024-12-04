import { useState } from "react";

function useData() {
    const [tasks, setTasks] = useState([]);

    function addTask(task) {
        setTasks((prevTasks) => [...prevTasks, task]);
    };    

    function removeTask(taskToRemove){
        setTasks((prevTasks) => prevTasks.filter(task => task !== taskToRemove));
    }


    function moveDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveUp(index) {
        if(index > 0 ) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return {
        tasks,
        addTask,
        removeTask,
        moveDown,
        moveUp,
    };
}
export default useData;