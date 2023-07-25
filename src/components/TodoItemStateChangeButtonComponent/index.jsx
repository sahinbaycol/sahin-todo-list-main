import React from "react";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import axios from "axios";
import R from "../../constants/Strings";

export default function TodoItemStateChangeButtonComponent({ onDelete,id}) {

  // const handleDelete = async () => {
  //   try {
  //     let result = await axios.delete(
  //       `https://1028-82-174-112-81.ngrok-free.app/todo-items/${id}`
  //     );
  //     onDelete();
  //   } catch (e) {
  //     console.error({ e });
  //   }
  // };

  return (
    <div>
      <ButtonWithIconComponent
        // buttonStyle={{
        //   borderRadius: '6px',
          
        // }}
        buttonStyle={{
          backgroundColor:'black',
          
          width:'100%',
          
        }}

        text={<p className="cardbuttontext">{R.completed}</p>}
        lefticon={<img style={{
          
        }}  className="cardbuttonimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXISRwHBvbqVWiqi4cFbfog6aOTV3fhpwHEjY02JEGbg&s" />
          
        }
        
        
      />
      {/* <ButtonWithIconComponent  text={R.delete} onClick={handleDelete}/> */}
    </div>
  );
}
