import image from "./assets/dinner.jpg";
import Article from "./components/Article";
import Taskk from "./components/Taskk";
function App() {

  //  return <div><h1>Welcome in React-App</h1><h2>Namaste ji</h2></div> //multiple data :- Wrapped in an anclosing tag.
  
  return (
  <>
  <h1>Welcome in React-App</h1>
  <h2>Namaste ji</h2>
  <img 

  // dynamic image ;- online image
  // src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800"

  // static image type 1 // image in public folder
  // static image type 2 // image in assets folder and import here 

  src="greet.jpg"
  height="550px"
  width="100%" 
  alt="banner" />

 <img src = {image}
  height="550px"
  width="100%" 
  alt="banner"  />

  <Taskk data="Article"></Taskk>
  
  <Article></Article>

  </>
  );
  }
  
export default App; 

  
