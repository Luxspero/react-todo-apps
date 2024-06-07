import React from "react";

const Todoitem = ({ todo }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <p className="list-item">{todo.title}</p>
        <span className="text-red-500 cursor-pointer">Del</span>
      </div>
    </>
  );
};

export default Todoitem;
