import React from 'react'
import ContentWelcomeTextComponent from '../ContentWelcomeTextComponent'
import ContentRightActionButtonsContainerComponent from '../ContentRightActionButtonsContainerComponent'

function ContentTopContainerComponent() {
  return (
    <div className='content-top-container'>
        <ContentWelcomeTextComponent />
        <ContentRightActionButtonsContainerComponent />

    </div>
  )
}

export default ContentTopContainerComponent