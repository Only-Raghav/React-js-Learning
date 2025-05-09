import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Tab1 from '../tabs/Tab1'
import Tab2 from '../tabs/Tab2'








function Section() {
  return (
    <>
          <section className='text'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/page1' element={<Page1></Page1>}>
        <Route path='tab1' element={<Tab1></Tab1>}></Route>
        <Route path='tab2' element={<Tab2></Tab2>}></Route>


        </Route>



        <Route path='/page2' element={<Page2></Page2>}></Route>
        <Route path='/page3' element={<Page3></Page3>}></Route>
        <Route path='/page4' element={<Page4></Page4>}></Route>
        <Route path='/login' element={<h1>This Is login Page</h1>}></Route>

        <Route path='*' element={<h1>page not found</h1>}></Route>
      </Routes>
    </section>
    </>
  )
}

export default Section
