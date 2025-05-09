import ExternalCss from "./components/ExternalCss";
import InlineCss from "./components/InlineCss";
import Cards from "./components/Cards"
import "./App.css"

function App() {

  //  return <div><h1>Welcome in React-App</h1><h2>Namaste ji</h2></div> //multiple data :- Wrapped in an anclosing tag.
  
  return (
  <>
  <h1>React With CSS</h1>
  <InlineCss></InlineCss>
  <ExternalCss></ExternalCss>
  <p className='text'>App.jsx css written in App.css</p>
  <hr />
  <div className="row">
  <Cards></Cards>
  <Cards></Cards>
  <Cards></Cards>
  </div>
  <hr />


  </>
  );
  }
  
export default App; 

  
