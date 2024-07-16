import { Button } from "react-bootstrap";

const TodoList = ({ todoList }) => {
  const handleDelete = (index) => {
    const todolar = [...todoList];
    todolar.splice(index, 1);
    localStorage.setItem("saveTodo", JSON.stringify(todolar));
  };

  return (
    <div className="X-button">
      {todoList ? (
        <ul>
          {todoList.map((data, index) => (
            <li key={index} style={{ fontSize: 25 }}>
              {" "}
              {data}
              <Button
                variant="success"
                onClick={handleDelete}
                className="x-button"
              >
                X
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <h1></h1>
      )}
    </div>
  );
};
export default TodoList;
