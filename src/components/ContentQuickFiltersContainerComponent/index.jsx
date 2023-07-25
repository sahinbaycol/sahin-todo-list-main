import React from 'react'
import ButtonWithIconComponent from '../ButtonWithIconComponent'

function ContentQuickFiltersContainerComponent() {
  return (
    <div className='content-quick-filter-button'>
        <ButtonWithIconComponent  lefticon={
          <img
            src="https://cdn-icons-png.flaticon.com/128/7693/7693332.png"
            alt=""
            className="content-right-action-icon"
          />
        }
        text={<p style={{
            marginLeft:'15px'
        }}>New Task</p>}
        buttonStyle={{
            border:'none',
            padding:'8px 15px',
            marginRight:'8px'
        }} />
    </div>
  )
}

export default ContentQuickFiltersContainerComponent