import React from 'react'

const TodoCompont = ({computedItemsLeft, clearCompleted}) => {
  return (
    <div>
      <div className="flex justify-between py-4 px-4 dark:bg-slate-800">
        <span className="text-gray-400">{computedItemsLeft} items left</span>
        <button className="text-gray-400" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoCompont
