import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export const NameContext = React.createContext();
export const ProfileContext = React.createContext();





function App() {

return (
  <div>
    <NameContext.Provider value="Rahul Raghav">
      <ProfileContext.Provider value="Profile Name :- raghav0816">

      <Header/>
      <Main/>

      </ProfileContext.Provider>
    </NameContext.Provider>
    

  </div>
)
}
export default App
