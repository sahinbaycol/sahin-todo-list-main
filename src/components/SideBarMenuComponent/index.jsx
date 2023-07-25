import React from "react";
import SideBarMenuItemComponent from "../SideBarMenuItemComponent";
import R from "../../constants/Strings";

function SideBarMenuComponent({  }) {
  

  return (
    <div className="side-bar-menu-item-container-component">
      <SideBarMenuItemComponent
        icon={
          <img
            src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
            alt=""
            className="side-bar-menu-icon-component"
          />
        }
        text={R.home}
        buttonStyle={{ borderRadius: "0" }}
      />
      <SideBarMenuItemComponent
        icon={
          <img
            src="https://cdn-icons-png.flaticon.com/128/2957/2957016.png"
            alt=""
            className="side-bar-menu-icon-component"
          />
        }
        text={R.tasks}
        buttonStyle={{ borderRadius: "0",marginTop:'15px' }}
      />
    </div>
  );
}

export default SideBarMenuComponent;
