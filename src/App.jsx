/* eslint-disable */
import { useEffect, useState } from "react";
import "./App.css";
import FILTER_STATES from "./constants/FilterStates";
import axios from "axios";

import SideBarContainerComponent from "./components/SideBarContainerComponent";

import TodoItemCardsContentContainerComponent from "./components/TodoItemCardsContentContainerComponent";


function App() {
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      let result = await axios.get(
        "https://1028-82-174-112-81.ngrok-free.app/todo-items",
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );
      setdata(result.data);
      setFilteredData(result.data)
    } catch (error) {
      console.log({ error });
    }
  };

  const [data, setdata] = useState([]);

  const [filteredData, setFilteredData]=useState([])

  const [filterState, setFilterState] = useState(FILTER_STATES.alltasks);

  const filterdata = (fs) => {
    if (fs === FILTER_STATES.alltasks) {
      setFilterState(FILTER_STATES.alltasks);
      handlenewdata();
    } else if (fs === FILTER_STATES.completed) {
      setFilterState(FILTER_STATES.completed);
      setFilteredData(data.filter((item)=> {
        return item.state===FILTER_STATES.completed
      }))
    } else if (fs === FILTER_STATES.inprogress) {
      setFilterState(FILTER_STATES.inprogress);
      setFilteredData(data.filter((item)=> {
        return item.state===FILTER_STATES.inprogress
      }))
    } else if (fs === FILTER_STATES.pending) {
      setFilterState(FILTER_STATES.pending);
      setFilteredData(data.filter((item)=> {
        return item.state===FILTER_STATES.pending
      }))
    }
    
  };

  async function handlenewdata() {
    await fetchdata();
  }

  const [isDeleting, setIsDeleting]=useState(false) 

  const handleSpinIn =()=> {
    setIsDeleting(true)
  }
  
  const handleSpinOut =()=> {
    setIsDeleting(false)
  }
  
  const handleNewItemSpinIn=()=> {
    setIsDeleting(true)
  }
  const handleNewItemSpinOut=()=> {
    setIsDeleting(false)
  }
  return (
    <div className="container">
      
      <SideBarContainerComponent handlenewdata={handlenewdata} handleNewItemSpinIn={handleNewItemSpinIn} handleNewItemSpinOut={handleNewItemSpinOut} />
      <TodoItemCardsContentContainerComponent
      filterState={filterState}
        data={filteredData}
        onFilterData={filterdata}
        onDelete={fetchdata}
        handleSpinIn={handleSpinIn}
        handleSpinOut={handleSpinOut}
        isDeleting={isDeleting}
        handleNewItemSpinIn={handleNewItemSpinIn}
        handleNewItemSpinOut={handleNewItemSpinOut}
      />
    </div>
  );
}

export default App;
