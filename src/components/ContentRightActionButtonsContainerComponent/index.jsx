import React from 'react'
import ButtonWithIconComponent from '../ButtonWithIconComponent'

function ContentRightActionButtonsContainerComponent() {
  return (
    <div className='content-right-action-container'>
        <ButtonWithIconComponent lefticon={
          <img
            src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
            alt=""
            className="content-right-action-icon"
          />
        }
        text={<p style={{
            marginLeft:'15px'
        }}>New Task</p>}
        buttonStyle={{
            border:'1px solid rgb(238, 234, 234)',
            padding:'8px 15px',
            marginRight:'8px'
        }} />
        <ButtonWithIconComponent lefticon={
          <img
            src="https://cdn-icons-png.flaticon.com/128/2278/2278049.png"
            alt=""
            className="content-right-action-icon"
          />
        }
        text={<p style={{
            marginLeft:'15px'
        }}>New Task</p>}
        buttonStyle={{
            border:'1px solid rgb(238, 234, 234)',
            padding:'8px 15px'
        }} righticon={<img
            src="https://cdn-icons-png.flaticon.com/128/9347/9347603.png"
            alt=""
            className="content-right-action-dropdown-icon"
          />} />
    </div>
  )
}

export default ContentRightActionButtonsContainerComponent