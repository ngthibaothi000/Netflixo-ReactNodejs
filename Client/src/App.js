import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeScreens from './Screens/HomeScreens'
import AboutUs from './Screens/AboutUs'
import NotFound from './Screens/NotFound'

function App() {
    return (
        <Routes>
            <Route path='/' element={<HomeScreens />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/about-us' element={<AboutUs />} />
        </Routes>
    )
}

export default App
