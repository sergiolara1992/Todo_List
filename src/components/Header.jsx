
import { useState, useEffect } from "react";
import Image from "../../public/icon-moon.svg"
import IconSun from "../../public/icon-sun.svg"

const initialStateDarkMode = localStorage.getItem("theme") === "dark";


const Header = ({createTodo}) => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {

   if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const [title, setTitle] = useState('')



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return setTitle("")
      
    }
    

    createTodo(title);
    setTitle("")
  }
  return (
    <div className="">
      <header className="container mx-auto px-8 pt-10  ">
        <div className="flex justify-between pt-5 ">
          <h1 className="uppercase text-white text-3xl font-bold tracking-widest">
            todo list
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <img src={Image} /> : <img src={IconSun} />}
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="dark:bg-slate-800 mx-auto mt-10 flex items-center gap-4 overflow-hidden rounded-md py-4 px-4 bg-white w-3/5 md:w-3/6 "
        >
          <span className="rounded-full border-2 inline-block "></span>
          <input
            className="rounded-md w-9/12 dark:bg-slate-800 "
            type="text"
            placeholder="Create a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </form>
      </header>
      ;
    </div>
  );
}

export default Header












