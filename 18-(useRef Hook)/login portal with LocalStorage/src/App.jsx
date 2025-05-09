import './App.css';
import Home from './components/Home';
import { useRef } from 'react';


function App() {

  const email = useRef();
  const password = useRef();

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData")
  
  function submitHandler() {
    if(email.current.value === "abc@gmail.com" && password.current.value === "12345"){
      localStorage.setItem("emailData","abc@gmail.com");
      localStorage.setItem("passwordData","12345");

    }
  }



return (
  <div>
    {
      getEmail && getPassword ? <Home/> :  
      <form onSubmit={submitHandler}>
      <div>
      <input type="text"
      placeholder='Enter Your Email Id'
      ref={email}
      />
    </div>

    <div>
      <input type="text"
      placeholder='Enter Your Password'
      ref={password}
      />
      <div>
      <button>login</button>
      </div>
      
    </div>

    </form>
    }
    
  </div>
)
}
export default App
