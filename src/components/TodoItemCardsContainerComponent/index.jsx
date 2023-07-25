import React from "react";
import TodoItemCardContainerComponent from "../TodoItemCardContainerComponent";
import { Spin } from "antd";
import { useState } from "react";

function TodoItemCardsContainerComponent({data, onDelete,handleSpinOut,handleSpinIn,isDeleting,handleNewItemSpinIn,handleNewItemSpinOut}) {

  
const  TodoItemCardsContainerComponentDelete=() => {
  onDelete()
}
  return (
    <div className="cardcontainerbox">
      <Spin spinning={isDeleting}  > 
      <TodoItemCardContainerComponent data={data}  handleNewItemSpinIn={handleNewItemSpinIn}
        handleNewItemSpinOut={handleNewItemSpinOut} isDeleting={isDeleting} handleSpinOut={handleSpinOut}  handleSpinIn={handleSpinIn}
        onDelete={TodoItemCardsContainerComponentDelete} />
      </ Spin>
    </div>
  );
}

export default TodoItemCardsContainerComponent;
