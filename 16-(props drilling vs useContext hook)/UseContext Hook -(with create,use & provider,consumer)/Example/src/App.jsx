import React from "react"
import { createContext } from 'react';
import './App.css';
import AComp from './Components/AComp';
import Bcomp from './Components/Bcomp';



export const UserContext = React.createContext();
export const InfoContext = React.createContext();




function App() {
 
let data = "useContext Hook";

return (
  <div >

    <h1>useContext Hook :- Data Transfer vai useContext Hook</h1>
    <UserContext.Provider value={data}>
      <InfoContext.Provider value="Nasted">
    <AComp/>
    </InfoContext.Provider>
    </UserContext.Provider>
    <Bcomp/>


  </div>
)
}
export default App
