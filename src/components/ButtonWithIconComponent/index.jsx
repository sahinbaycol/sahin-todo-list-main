import React from "react";

function ButtonWithIconComponent({
  text,
  buttonStyle,
  onHover,
  lefticon,
  righticon,
  isDropdown,
  options,
  onClick,
  showForm
}) {
  const styles = {
    buttonContainerStyle: {
      borderRadius:'6px',
            color:'black',
            border:'none' ,
            backgroundColor:'white',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            ...buttonStyle
    },
  };
  return (
    <div >
      <button  style={styles.buttonContainerStyle} onClick={onClick}>
        {lefticon}
        {text}
        {righticon}
      </button>
      
    </div>
  );
}

export default ButtonWithIconComponent;
