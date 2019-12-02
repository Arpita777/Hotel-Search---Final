import React from 'react'
function Details(props){
  return(
    <div>
       <h1>{props.title.RestaurantName.toUpperCase()}</h1>
       <p>{props.title.Cuisines}</p>
       <p>*{props.title.Aggregaterating}</p>
    </div>
   
  )
}
export default Details
