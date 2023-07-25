import React from "react";
import TodoItemTitleComponent from "../TodoItemTitleComponent";
import TodoItemStateSymbolComponent from "../TodoItemStateSymbolComponent";

export default function TodoItemTopContainerComponent({title,src}) {
  return (
    <div className="todo-item-top-container">
      <TodoItemTitleComponent title={title} />
      <TodoItemStateSymbolComponent src={src}/>
    </div>
  );
}
