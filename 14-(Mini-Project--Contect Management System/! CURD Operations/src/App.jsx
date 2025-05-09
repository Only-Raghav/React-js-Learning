import { Route, Routes } from "react-router-dom"
import Header from "./contect-app/Header"
import Home from "./contect-app/Home"
import Insert from "./contect-app/Insert"
import Read from "./contect-app/Read"
import Page from "./contect-app/Page"
import Edit from "./contect-app/Edit"
import Update from "./contect-app/Update"

function App() {


  return (
    <>
     <Header/>
     <section className="renderpage">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/insert" element={<Insert/>}></Route>
        <Route path="/update" element={<h1>updating page</h1>}></Route>
        <Route path="/read" element={<Read/>}></Route>
        <Route path="page/:id" element={<Page/>}></Route>
        <Route path="edit/:id" element={<Edit/>}></Route>


        <Route path="/delete" element={<h1>Panding</h1>}></Route>

      </Routes>
     </section>
    </>
  )
}

export default App
