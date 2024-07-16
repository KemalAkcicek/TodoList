import Button from "react-bootstrap/Button";

import { useEffect, useState } from "react";

const TodoControl = ({ onFormSubmit }) => {
  const [todo, setTodo] = useState("");
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      alert("Lütfen bir todo giriniz");
    } else {
      setTodo("");

      const todolar = JSON.parse(localStorage.getItem("saveTodo")) || [];
      const newData = [...todolar, todo];
      localStorage.setItem("saveTodo", JSON.stringify(newData));

      alert("Todo başarıyla eklendi");
    }
  };
  useEffect(() => {
    const data = localStorage.getItem("saveTodo");
    const parseData = data ? JSON.parse(data) : null;
    onFormSubmit(parseData);
    
  },[onFormSubmit]);

  return (
    <div>
      <h1>Todo List</h1>
      <input
        style={{ fontSize: 25 }}
        type="text"
        onChange={handleInputChange}
        value={todo}
        placeholder="Todo Giriniz"
      ></input>
      <br></br>
      <Button
        variant="secondary"
        onClick={handleSubmit}
        type="submit"
        style={{ fontSize: 20, margin: 10 }}
      >
        Ekle
      </Button>
    </div>
  );
};
export default TodoControl;
