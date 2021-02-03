import React from 'react'

function SearchBar(propsObj){

  //No more of this:
  // let search = document.getElementById('search')
  // search.addEventListener('submit', someCallback)

  //In React, we set our event listeners right on the elements themselves
  //There is a finite list of potential event listeners depending on the type of element
  //These eventListeners look like attributes on the HTML tags, and they receive callback function references as arguments (or passed-in attributes)
  //You cannot set eventListeners on Components (they will just be treated like props). HTML elements only

  //When we're in functional components, we still have to use the 'function keyword when defining functions inside'
  //In class components, we don't have to use 'function', 'let', or 'const'
  function handleSubmit(e){
    e.preventDefault()
    let value = e.target["toy-input"].value
    propsObj.changeStateValue(value)
  }

  return (
    <div id="search-bar">
        <form onSubmit={handleSubmit} id="search">
          <input name="toy-input" type="text" />
          <input type="submit" value="Search!" />
        </form>
    </div>
  )
}

export default SearchBar
