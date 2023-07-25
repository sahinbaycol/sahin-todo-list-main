import React from "react";
import { useState } from "react";
import FILTER_STATES from "../../constants/FilterStates";


function ContentFiltersButtonComponent({ onFilterData,filterState, }) {
  

  const styles = {
    inactiveButton: {
      backgroundColor: "white",
      color: "black",
    },
    activeButton: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div className="contentbuttoncontainer">
      <button
        value="All TaskS"
        onClick={() => {
          onFilterData(FILTER_STATES.alltasks);
        }}
        className="contentbutton1"
        style={
          filterState === FILTER_STATES.alltasks
            ? styles.activeButton
            : styles.inactiveButton
        }
      >
        All Tasks
      </button>
      <button
        onClick={() => {
          onFilterData(FILTER_STATES.completed);
        }}
        style={
          filterState === FILTER_STATES.completed
            ? styles.activeButton
            : styles.inactiveButton 
            
            

        }
        value="Completed"
        className="contentbutton23"
      >
        Completed
      </button>
      <button
        onClick={() => {
          onFilterData(FILTER_STATES.inprogress);
        }}
        style={
          filterState === FILTER_STATES.inprogress
            ? styles.activeButton
            : styles.inactiveButton
        }
        value="In-Progress"
        className="contentbutton23"
      >
        In-Progress
      </button>
      <button
        onClick={() => {
          onFilterData(FILTER_STATES.pending);
        }}
        style={
          filterState === FILTER_STATES.pending
            ? styles.activeButton
            : styles.inactiveButton
        }
        value="Pending"
        className="contentbutton4"
      >
        Pending
      </button>
    </div>
  );
}

export default ContentFiltersButtonComponent;
