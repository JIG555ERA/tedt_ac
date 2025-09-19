import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'

const App = () => {
    return (
        <div className=''>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
    )
}

export default App
