import Taskk from "./components/Taskk";
import Tech from "./components/Tech";
function App() {

  //  return <div><h1>Welcome in React-App</h1><h2>Namaste ji</h2></div> //multiple data :- Wrapped in an anclosing tag.
  
  return (
  <>

  <Taskk data="Article"></Taskk>
  <Tech data="HTML" chapter="10"></Tech>
  <Tech data="CSS" chapter="20"></Tech>
  <Tech data="JAVASCRIPT" chapter="30"></Tech>
  <Tech data="REACT" chapter="40"></Tech>


  </>
  );
  }
  
export default App; 

  
