import  React from 'react';

export default function SideBarMenuItemComponent({
    icon,
    text,
    buttonStyle,
    selected,
    
})
{
    const styles={
        buttoncontainerstyle:{
            borderRadius:'8px',
            color:'black',
            border:'none' ,
            backgroundColor:'white',
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            ...buttonStyle
        }
    }

    return (
        <div className="">
            <button style={styles.buttoncontainerstyle} onClick={selected}>
                <div className="side-bar-menu-icon-component">
                    {icon}
                </div>
                <div className='side-bar-menu-item-component'>
                    {text}
                </div>
            </button>
        </div>
    );
}