import React from 'react';
import './App.css';

import ToyHeader from './ToyHeader'
import SearchBar from './SearchBar'
import ToysContainer from './ToysContainer'

class App extends React.Component {

  //state is gonna hold the value that SearchBar has and that ToysContainer wants
  state={search: '', someOtherKey: 'someOtherValue'}

  //how do we change the value of the key 'search' in state?
  //we write a callback function inside of this component, and we pass it down to the SearchBar component to use to 'trap' the term

  changeStateValue = (string) => {
    //Alllllllll functions that will be used as callbacks and need access to a specific 'this' context MUST be arrow functions or otherwise explicitly bound to the correct instance of a component/context

    //React expects us to define some instance methods that it will use
    //But just like any time we inherit code from another class, we can also inherit methods that were written in the class
    //setState is a method that is tied into React internals and whenever it is triggered it will cause a DOM "refresh", or changes to be made
    //Besides changing state through the setState method, React will also trigger a "rerender" when a prop value to a component has changed
    //If you put some console logs around, you'll be surprised at how often React rerenders some elements. There are some techniques to prevent unecessary re-renders

    //setState always receives an object as an argument
    //the object should include the key of the value you want to change, but doesn't necessarily have to have all values
    //although we are passing in an object with just one key value pair, it won't erase the other key value pairs in state
    //{search: "someSearchTerm", someOtherKey: "someOtherValue"}
    //This is because setState uses the spread operator, and the spread operator always preserves originally key value pairs and replaces key value pairs added on at the end
    // {...state, search: 'someSearchTerm'}
    //One other GOTCHA about setState is that it is asynchronous 🤦🏻‍♂️
    // If you want to call a function that runs only when setState has finished running, you can pass it in as a second argument to setState
    // The reason it is asynchronous is for effiency purposes; if many setStates are fired at once, it will wait until they're all done firing and batch them and run them as one
    // this.setState({search: 'someSearchTerm'}, () => console.log(this.state))
    console.log(string, this)
    this.setState({search: string}, function(){console.log(this.state)})
  }

  render(){
    return(
      <div className="App">
      <ToyHeader />
      {/* We pass the method to SearchBar so that it can capture the value of the input and bring it up to change the value in App's state */}
      <SearchBar changeStateValue={this.changeStateValue}/>
      {/* We pass the value from state into the ToysContainer as a prop*/}
      <ToysContainer search={this.state.search}/>
      </div>
    )
  }
}

// function App() {

  //Sibling components CANNOT talk to each other. They CANNOT share information.
  //Anything that one sibling component needs to say to another needs to mediated through the parent
  //Whenever two components need to share information, it's a sign that the parent component NEEDS to be a class component so it can hold a state value

//   return (
//     <div className="App">
//       <ToyHeader />
//       <SearchBar />
//       <ToysContainer />
//     </div>
//   );
// }

export default App;

//A component is a collection of elements that represent a unity in a goal or task (organizational)
//As we nest our components, their specifity increases
