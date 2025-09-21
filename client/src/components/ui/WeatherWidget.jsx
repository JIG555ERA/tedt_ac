import React, { useState, useEffect } from "react";
import { ENDPOINT_URL } from "../constants/constant.js";

const WeatherWidget = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch todos (a plain async function, no hooks inside)
  const fetchTodos = async () => {
    try {
      const res = await fetch(ENDPOINT_URL);
      const data = await res.json();

      if (data.success) {
        setTodos(data.data);
      }
    } catch (err) {
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  // call fetchTodos automatically on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="w-[90vw] h-auto bg-black rounded-3xl p-[24px] flex flex-col justify-between text-[#F9F9F9]">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-[24px] font-semibold">Todos</h1>
        <button
          onClick={fetchTodos}
          className="px-[16px] py-[12px] text-[20px] font-semibold bg-gray-700 rounded-3xl border-black"
        >
          Fetch todos
        </button>
      </div>
      <div className="w-full flex flex-col pt-[24px]">
        <div className="w-full h-auto gap-3 rounded-3xl ">
          {todos.length === 0 ? (
            <p>No todos found.</p>
          ) : (
            todos.map((todo) => <p key={todo.id} className="bg-gray-700">{todo.title}</p>)
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
