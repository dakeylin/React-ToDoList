import { useState } from "react";

export default function ToDoForm({addTask}) {

  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  const handlKeyPress = (e) => {
    if(e.key === 'Enter') {
        handleSubmit(e)
    }
  }


  return (
    <form onSubmit={handleSubmit}>
        <input
            value={userInput}
            type="text"
            onChange={handleChange} 
            onKeyDown={handlKeyPress}
            placeholder="Ведите значение..."
        />
        <button>Сохранить</button>
    </form>
  );
}
