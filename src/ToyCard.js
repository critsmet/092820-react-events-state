import React from 'react'

function ToyCard(props){
  //cannot use 'class' as an attribute in JSX, must use 'className instead'
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <img alt={"photo of " + props.name} src={props.image} className="toy-avatar"/>
      <p>5 Likes </p>
      <button className="like-btn">Like &lt;3</button>
    </div>
  )
}

export default ToyCard
