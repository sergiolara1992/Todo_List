import Only from "./Only";



const TodoList = ({todos, removeTodo, updateTodo}) => {
  return (
    <>
    {todos.map((todo) => (
        <Only key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
    ))}
     
      
      
    </>
  );
}

export default TodoList
