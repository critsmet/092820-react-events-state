import React from 'react'

import ToyCard from './ToyCard'

//local state is a feature that only class components have
//component's localState and the setState method that we get from React's pre-written component help us with DOM re-rendering without explicitly having to make changes to the DOM
//in other words, when we're working with state, changes to it using the setState method cause the DOM to re-render automatically

//the state object is where we can hold information that determined functionality of our application or information that we'll render without
//ex of things that go in state:
//object of a logged in user
//boolean value if darkmode is on
//in this case, our toys will go in a state object

//Change this component from a functional component to a class component

// new ToysContainer()
class ToysContainer extends React.Component{

  //writing the constructor and passing in props as an argument to it, and then to super, is no longer required
  // constructor(arg){
  //   super(arg)
  // }

  //super() is the way we call the constructor of the class that we're extending from

  // class ComponentThatReactCreatedThatWereExtendingFrom {
  //
  //   constructor(arg){
  //     this.props = arg
  //   }
  // }

  //In other words, the class property name 'props' is already decided for us in the constructor of the component we're inhereting from, and therefor we can't change it

  //In summary, we can only access props in a class component by writing this.props

  //In functional components, an object gets passed into the argument space, and we typically call that object 'props', although we can call it truly whatever we want

  //state should always be an object
  state = {
    toys: [
      {name: "Woody", image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"},
      {name: "Buzz Lightyear", image: "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png" },
      {name: "Mr. Potato Head", image: "https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217"}
    ]
  }

  //REMINDER: This is just an instance method, but this a custom one for us. React has no extra special processes for this instance method
  renderToys(){
    //React wants us to give components constructed through iteration a key prop that is a unique identifier
    //React REUSES components, so in order to ensure that functionality isn't accidentally adopted by a ghost component, we need to specify unique keys
    if (this.props.search !== ''){
      return this.state.toys.filter(toyObj => toyObj.name.includes(this.props.search)).map(toyObj => <ToyCard key={toyObj.name + "-card"} name={toyObj.name} image={toyObj.image}/>)
    } else {
      return this.state.toys.map(toyObj => <ToyCard key={toyObj.name + "-card"} name={toyObj.name} image={toyObj.image}/>)
    }
  }

  //class components must always always always have a render instance method
  //if we define a component as a function, React will simply call that function and append the JSX to the DOM
  //if we define a component as a class component, React will create an instance of it, associate with a DOM element, and then call the render method

  //REMINDER: This is just an instance method. React has some instance methods that, if you give them a certain name, it will do something extra with them. render is one of those methods
  render(){
    //the easiest way to check prop values for a class component instance is to console log them inside of the render method before turn
    console.log(this.props);
    //the render instance method should return the JSX that we want put to the DOM
    return (
      <div id="toys-container">
        {this.renderToys()}
      </div>
    )
  }
}

export default ToysContainer

//new ToysContainer().render()


//functional
// function ToysContainer(){
//   let state = {}
  //React in this version does not have the functionality required to make changes when it notices state changes in a functional component
  //This is not the case with the newest versions of React that ship with Hooks
  //Hooks are Reacts new state management and component rendering mechanisms, they make class components almost obsolete
  //However, class components are they tried and true way of doing things in React. With hooks so far, people are still debating about the best way to do things

  //Example of hooks:
  // let [state, setstate] = useState()

//   return (
//     <div id="toys-container">
//       <ToyCard name="Woody" image="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"/>
//       <ToyCard name="Buzz Lightyear"  image="http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png" />
//       <ToyCard name="Mr. Potato Head" image="https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217" />
//     </div>
//   )
// }
//ToysContainer()


// <div class="card">
//   <h2>Woody</h2>
//   <img src="http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png" class="toy-avatar"/>
//   <p>5 Likes </p>
//   <button class="like-btn">Like &lt;3</button>
// </div>
// <div class="card">
//   <h2>Buzz Lightyear</h2>
//   <img src="http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png" class="toy-avatar"/>
//   <p>8 Likes </p>
//   <button class="like-btn">Like &lt;3</button>
// </div>
// <div class="card">
//   <h2>Mr. Potato Head</h2>
//   <img src="https://vignette.wikia.nocookie.net/universe-of-smash-bros-lawl/images/d/d8/Mr-potato-head-toy-story.gif/revision/latest?cb=20151129131217" class="toy-avatar"/>
//   <p>3 Likes </p>
//   <button class="like-btn">Like &lt;3</button>
// </div>
// <div class="card">
//   <h2>Slinky Dog</h2>
//   <img src="https://www.freeiconspng.com/uploads/slinky-png-transparent-1.png" class="toy-avatar"/>
//   <p>4 Likes </p>
//   <button class="like-btn">Like &lt;3</button>
// </div>
// <div class="card">
//   <h2>Rex</h2>
//   <img src="http://umich.edu/~chemh215/W11HTML/SSG5/ssg5.2/FRex.png" class="toy-avatar"/>
//   <p>1 Likes </p>
//   <button class="like-btn">Like &lt;3</button>
// </div>
// </div>
