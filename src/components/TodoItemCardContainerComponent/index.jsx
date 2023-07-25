import React, { useState } from "react";
import TodoItemTopContainerComponent from "../TodoItemTopContainerComponent";
import TodoItemSubtitleComponent from "../TodoItemSubtitleComponent";
import TodoItemContentComponent from "../TodoItemContentComponent";
import R from "../../constants/Strings";
import TodoItemStateChangeButtonDividerComponent from "../TodoItemStateChangeButtonDividerComponent";
import TodoItemStateChangeButtonComponent from "../TodoItemStateChangeButtonComponent";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import axios from "axios";
import completed from "../../../public/completed.png";
import inprogress from "../../../public/Inprogress.png";
import pending from "../../../public/pending.png";
import { Spin } from "antd";

export default function TodoItemCardContainerComponent({ data, onDelete,handleSpinIn,handleSpinOut }) {


  
  const handleDelete = async (id) => {
    console.log("tıklandı");
    try {
      handleSpinIn()
      let result = await axios.delete(
        `https://1028-82-174-112-81.ngrok-free.app/todo-items/${id}`
      );
      onDelete();
    } catch (e) {
      console.error({ e });
    } finally  {
      handleSpinOut()
    }
  };

  const usersMap = data.map((item) => {
    const STATE_IMAGES = [
      {
        state: "COMPLETED",
        image: completed,
      },
      {
        state: "INPROGRESS",
        image: inprogress,
      },
      {
        state: "PENDING",
        image: pending,
      },
    ];

    let source = completed;
    for (let i = 0; i < STATE_IMAGES.length; i++) {
      if (STATE_IMAGES[i].state === item.state) {
        source = STATE_IMAGES[i].image;
      }
    }
    return (
      <div className="contentcard" id={item.id} key={item.id}>
        {/* <Spin spinning={isDeleting}> */}
        <TodoItemTopContainerComponent title={item.title} src={source} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <ButtonWithIconComponent
            buttonStyle={{
              margin: "10px 0 0 0",
              backgroundColor: "transparent",
            }}
            lefticon={
              <img
                className="delete-button-image"
                src="https://cdn-icons-png.flaticon.com/128/3970/3970440.png"
              />
            }
            onClick={() => {
              handleDelete(item.id);
            }}
          />
        </div>
        <TodoItemSubtitleComponent subtitle={item.subtitle} />
        <TodoItemContentComponent content={item.content} />
        <TodoItemStateChangeButtonDividerComponent />
        <TodoItemStateChangeButtonComponent />
        {/* </Spin> */}
      </div>
    );
  });

  return <div className="cardcontainer">{usersMap}</div>;
}
