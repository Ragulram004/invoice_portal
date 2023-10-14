import "./styles.css";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function AddStudent() {
  const count = useRef(0);
  const [items, setItems] = useState([0]);
  const [taskName, setTaskName] = useState("Task Name");

  const addStudent = () => {
    if (items.length < 10) {
      count.current++;
      setItems([...items, { id: count.current, name: taskName }]);
    } else {
      alert("You've reached the maximum limit of 10 students.");
    }
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  const removeTask = (id) => {
    const newItems = items.filter((task) => task.id !== id);
    setItems(newItems);
  };

  return (
    <div id="example">
      <div id="controls">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={addStudent}
          id="button"
        >
          +
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {items.map((task, index) => (
            <motion.li
              layout
              key={task.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring" }}
            >
              <h4>Student {index+1}:</h4>  
              <div id="wave-group">
                <input required type="text" id="input" value={task.taskName} onChange={handleChange}
                placeholder="Student Name..." />
                <span id="bar"></span>
              </div>
              <button id="btn" onClick={() => removeTask(task.id)}>
                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" id="icon">
                  <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                </svg>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
