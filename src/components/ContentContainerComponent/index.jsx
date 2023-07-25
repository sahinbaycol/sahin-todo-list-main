import React from 'react'
import ContentFiltersContainerComponent from '../ContentFiltersContainerComponent'
import ContentTopContainerComponent from '../ContentTopContainerComponent'

function ContentContainerComponent({onFilterData,filterState}) {

  
  return (
    <div className='content-container'>
        <ContentTopContainerComponent />
        <ContentFiltersContainerComponent onFilterData={onFilterData} filterState={filterState} />
    </div>
  )
}

export default ContentContainerComponent