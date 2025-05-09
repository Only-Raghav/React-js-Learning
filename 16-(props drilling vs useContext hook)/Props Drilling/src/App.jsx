import './App.css';
import AComp from './Components/AComp';
import Bcomp from './Components/Bcomp';










function App() {
 
let data = "Props Drilling";

return (
  <div >

    <h1>Props Drilling :- Data Transfer vai props</h1>
    <AComp data={data}/>
    <Bcomp data={data}/>


  </div>
)
}
export default App
