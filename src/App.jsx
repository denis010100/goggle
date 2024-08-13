import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './pages/search'
import SearchResults from './pages/search-results'

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Search />} />
                    <Route path="/search/:query" element={<SearchResults />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
