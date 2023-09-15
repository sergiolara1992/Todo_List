import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoCompont from "./components/TodoCompont";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

function App() {
  const [ todos, setTodos ] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));    
  }, [todos]);
  

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const updateTodo = (id) => {
    setTodos(todos.map(
      todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setfilter] = useState("active");

  const changeFilter = (filter) => setfilter(filter)

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
        default:
          return todos;
    }
  }; 

  return (
    <div className="h-[100vh] dark:bg-gray-950 dark:text-white ">
      <div className="background bg-no-repeat bg-cover h-80  ">
        <Header createTodo={createTodo} />
      </div>

      <main className="container mx-auto flex flex-col items-center  ">
        <div className="dark:bg-gray-800 bg-white px-4 rounded-md -mt-20 w-4/5 md:w-6/12">
          <TodoList
            todos={filteredTodos()}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <TodoCompont
            computedItemsLeft={computedItemsLeft}
            clearCompleted={clearCompleted}
          />
        </div>
      </main>
      <TodoFilter changeFilter={changeFilter} filter={filter} />
    </div>
  );
}

export default App;
