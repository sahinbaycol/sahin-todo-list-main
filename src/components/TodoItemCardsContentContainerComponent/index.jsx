import React from "react";
import ContentContainerComponent from "../ContentContainerComponent";
import TodoItemCardsContainerComponent from "../TodoItemCardsContainerComponent";

function TodoItemCardsContentContainerComponent({data, onDelete,onFilterData,filterState,isDeleting,handleSpinIn,handleSpinOut,handleNewItemSpinOut,handleNewItemSpinIn}) {

 

  const TodoItemCardsContentContainerComponentDelete =() => {
    onDelete()
  }
  return (
    <div className="todo-item-cards-content-container">
      <ContentContainerComponent   onFilterData={onFilterData}  filterState={filterState}/>
      <TodoItemCardsContainerComponent data={data} handleSpinIn={handleSpinIn} handleSpinOut={handleSpinOut} isDeleting={isDeleting} handleNewItemSpinIn={handleNewItemSpinIn}
        handleNewItemSpinOut={handleNewItemSpinOut}
        onDelete={TodoItemCardsContentContainerComponentDelete} />
    </div>
  );
}

export default TodoItemCardsContentContainerComponent;
