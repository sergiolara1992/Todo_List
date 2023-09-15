import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { BiCheck } from "react-icons/bi"


const Only = ({todo, removeTodo, updateTodo }) => {
    const { completed, id, title } = todo;
  return (
    <div>
      <div className="flex justify-between pt-2 border-b-2 border-b-gray-400 h-16 dark:bg-gray-800 ">
        <button
          className={`h-8 w-8 flex-none rounded-full border-2 mt-2 ${
            completed
              ? "grid  flex-none place-items-center rounded-full border-2  "
              : "inline-block"
          }`}
          onClick={() => updateTodo(id)}
        >
          {completed && <BiCheck className="dark:text-white" />}
        </button>
        <p
          className={` text-gray-600 dark:text-gray-400 ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button onClick={() => removeTodo(id)}>
          <AiFillDelete className="dark:text-white" />
        </button>
      </div>
    </div>
  );
}

export default Only
