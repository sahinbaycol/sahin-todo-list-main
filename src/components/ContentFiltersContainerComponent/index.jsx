import React from 'react'
import ContentFiltersButtonComponent from '../ContentFiltersButtonComponent'
import ContentQuickFiltersContainerComponent from '../ContentQuickFiltersContainerComponent'

function ContentFiltersContainerComponent({onFilterData,filterState}) {

  
  return (
    <div className='content-filter-container'>
        <ContentFiltersButtonComponent  onFilterData={onFilterData}  filterState={filterState} />
        <ContentQuickFiltersContainerComponent />
    </div>
  )
}

export default ContentFiltersContainerComponent