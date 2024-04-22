import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import Container from "./components/Container/index";
import SearchInput from "./components/SearchInput/index";
import Info from "./components/Info/index";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Nanas Subang", count: 1 },
    { title: "Dodol Garut", count: 1 },
    { title: "Tahu Sumedang", count: 1 },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("Please input item before add");
      return;
    }
    const newTodos = [...todos];
    newTodos.push({ title: value, count: 1 });
    setTodos(newTodos);
    setValue("");
  };

  const handleCountPlus = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1;
    setTodos(newTodos);
  };
  const handleCountMin = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count <= 1) {
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else {
      newTodos[index].count -= 1;
      setTodos(newTodos);
    }
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput
          onSubmit={handleSubmit}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={()=> setTodos([]) }
        />

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}
                  <div className="todo-icon-wrap">
                    <div className="todo-count">{todo.count}</div>
                    <button
                      onClick={() => handleCountMin(index)}
                      className="todo-action-button"
                    >
                      -
                    </button>
                    <button
                      onClick={() => handleCountPlus(index)}
                      className="todo-action-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Empty</div>
        )}
      </Container>
    </>
  );
}

export default App;
