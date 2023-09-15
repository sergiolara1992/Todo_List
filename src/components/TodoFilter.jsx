import React from 'react'

const TodoFilter = ({changeFilter, filter}) => {
  return (
    <div className='' >
      <div className="container mx-auto px-16 md:px-96 gap-4 ">
        <div className="bg-white mt-10 flex justify-center rounded-md gap-8 p-4 dark:bg-slate-800">
          <button
            onClick={() => changeFilter("all")}
            className={`${
              filter === "all"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => changeFilter("active")}
            className={`${
              filter === "active"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            Active
          </button>
          <button 
            onClick={() => changeFilter("completed")}
            className={`${
              filter === "completed"
                ? "text-blue-500 hover:text-gray-400"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            {" "}
            Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoFilter
