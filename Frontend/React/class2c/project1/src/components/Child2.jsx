import React from 'react'
import Child3 from './Child3'

function Child2({money}) {
  return (
    <div><Child3 money={money}/></div>
  )
}

export default Child2