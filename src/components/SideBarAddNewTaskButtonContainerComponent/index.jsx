import React from "react";
import ButtonWithIconComponent from "../ButtonWithIconComponent";
import { useState } from "react";
import axios from "axios";

export default function SideBarAddNewTaskButtonContainer({handlenewdata,handleNewItemSpinIn,handleNewItemSpinOut}) {
  const [showForm, setShowForm] = useState(false);

  const showFormhandle = () => {
    setShowForm(!showForm);
  };

  const initialvalues = {
    title: "",
    subtitle: "",
    content:"",
    state:'COMPLETED'
  };
  const [datanew, setData] = useState(initialvalues);

  const handleChange = (e) => {
    setData({ ...datanew,[e.target.name]: e.target.value });

  };

  const senddata= async (e) => {
    e.preventDefault()

    try {
      handleNewItemSpinIn()
      let result= await axios.post("https://1028-82-174-112-81.ngrok-free.app/todo-items",datanew)
      handlenewdata()
    } catch (error) {
      console.log({error})
    } finally {
      handleNewItemSpinOut()
    }
  }

  return (
    <div className="sidebar-addnew-task">
      <ButtonWithIconComponent
        onClick={showFormhandle}
        lefticon={
          <img
            style={{
              marginLeft: "15px",
              width: "15px",
              height: "15px",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB6CAMAAACssAzVAAAAYFBMVEUAAAD///++vr5QUFD19fX7+/tISEh3d3e6urrIyMimpqbn5+ezs7Pk5OSgoKCTk5MbGxvt7e3e3t5AQECsrKwsLCzV1dVgYGA6OjoUFBRubm5lZWWMjIzOzs4mJiYKCgrZFLOOAAAByklEQVRoge3b63KCMBAF4ISbIAoKirZiff+3rKIOFck6Qz2bGeec322/IUQLm11jpuW7OOZRHC2zYjfxL0xLGdk+61bNDdf2MctaBz7Yp8SJBpw8w2d6i4dXw6W+pjrB5c0obG2BhuvYIUd7sDx3wPiLzp3yEguHrsU+b+8QKs+csLUzqFwKcgmVF4K8gMqpIKdQORDkgDJlypQpU6ZMmTJlypQpU/54edUG7rrPu5IH7dfADTO4ek/2UJ11lRQx6Wt220YVPl/2bclX2rC1x9f7FZWugjVSolfI5dyl8iI3xtReYGv3YiUTmVasJyKTerrN1lZm/CgGn7VxF+mxiT3K/lZb/0v7mkb5H2SfVDyNQaY0vrbYXjrvQ6a6PBhEr3/u/em6E3zc6dsTcqEON/dnX+1b3fS9ATPVDf5wmPcjHTi+N9Vh8JZxajP8Jo+bwtF6sk1CMbX0EpTV8i8n/+r8+Ky3WMqUKVOmTJkyZcqUKVOm/Nmyv45if13U/jrH/XXL+5sQEKYiciwsFOLnYHl00qhbbPiMlesTvUHD5me8UpgPOxcA2Y3KKkNlY59ppQHC3dMEn8oVdyn+3uwI+7U5zH1S8zh5UvMXAOkheoKIhq4AAAAASUVORK5CYII="
          />
        }
        text={
          <p style={{ color: "white", marginLeft: "15px" }}>Add New Task</p>
        }
        buttonStyle={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "black",
          border: "none",
          alignItems: " center",
          justifyContent: "center",
          padding: " 12px 40px",
          marginTop: "20px",
          borderRadius: "6px",
          marginRight: " 15px",
        }}
      />
      <div className="formcontainer">
        {showForm && (
          <form className="formbox">
            <label className="formtext">title</label>
            <input
              value={datanew.title} id="title"
              name="title"
              onChange={handleChange} type="text"
            />
            <label className="formtext">subtitle</label>
            <input
              value={datanew.subtitle} id="subtitle"
              name="subtitle"
              onChange={handleChange} type="text"
            />
            <label className="formtext">content</label>
            <input
              value={datanew.content} id="content"
              name="content"
              onChange={handleChange} type="text"
            />
            {/* <select className='dropdown'>
                  <option value="A">completed</option>
                  <option value="B">inprogress</option>
                  <option value="C">pending</option>
              </select> */}
            <button
              onClick={senddata} className="submitbutton"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
