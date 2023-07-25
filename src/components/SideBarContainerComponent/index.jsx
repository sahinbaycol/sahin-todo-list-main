import React from "react";
import SideBarMenuComponent from "../SideBarMenuComponent";
import SideBarAddNewTaskButtonContainer from "../SideBarAddNewTaskButtonContainerComponent";
import SideBarUserButtonContainer from "../SideBarUserButtonContainerComponent";

function SideBarContainerComponent({handlenewdata,data,handleNewItemSpinIn,handleNewItemSpinOut}) {

const SideBarContainerComponentNewData =(newData) => {
  handlenewdata(newData)
}

  return <div className="sidebar-container-component">
    <div>
      <SideBarMenuComponent />
      <SideBarAddNewTaskButtonContainer handleNewItemSpinIn={handleNewItemSpinIn} handleNewItemSpinOut={handleNewItemSpinOut} handlenewdata={SideBarContainerComponentNewData}
        data={data} />
    </div>
    <div>
      <SideBarUserButtonContainer />
      </div>
  </div>;
}

export default SideBarContainerComponent;
