import ArrayHandling from "./components/arrayHandling";
import ObjHandling from "./components/ObjHandling";
import PropsChildDemo from "./components/propsChildDemo";
import Taskk from "./components/Taskk";
import Tech from "./components/Tech";
function App() {

  //  return <div><h1>Welcome in React-App</h1><h2>Namaste ji</h2></div> //multiple data :- Wrapped in an anclosing tag.
  
  return (
  <>

  <Taskk data="Task 2 :: Article"></Taskk>
  <Tech data="HTML" chapter="10"></Tech>
  <Tech data="CSS" chapter="20"></Tech>
  <Tech data="JAVASCRIPT" chapter="30"></Tech>
  <Tech data="REACT" chapter="40"></Tech>

  <ArrayHandling></ArrayHandling>
  <ObjHandling></ObjHandling>

  <PropsChildDemo/>
  <PropsChildDemo><h3>Best In IT</h3></PropsChildDemo>
  <PropsChildDemo/>
  <PropsChildDemo><h3>IT School</h3></PropsChildDemo>


  </>
  );
  }
  
export default App; 

  
