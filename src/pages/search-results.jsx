import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import searchData from '../data/fake-database'
import SearchBar from '../components/Searchbar'

const ITEMS_PER_PAGE = 10

const SearchResults = () => {
    const { query } = useParams() // Get the search query from the URL
    const [currentPage, setCurrentPage] = useState(1)
    const [searchTime, setSearchTime] = useState(0) // State to store the search duration
    const [results, setResults] = useState([]) // State to store filtered results
    const [totalResults, setTotalResults] = useState(0) // State to store total results count

    useEffect(() => {
        const startTime = new Date() // Capture start time

        // Filter searchData to include items that match the query
        const filteredResults = searchData.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )

        const endTime = new Date() // Capture end time
        setSearchTime(endTime - startTime) // Calculate and set search duration

        setResults(filteredResults) // Update the results state
        setTotalResults(filteredResults.length) // Update the total results count
    }, [query]) // The effect will run whenever query changes

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const visibleResults = results.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    )

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <div className="max-w-3xl mt-10 p-4">
            <div className="flex flex-row items-start">
                <Link to="/" className="w-3/12">
                    <img className="w-full" src="../banner.gif" alt="banner" />
                </Link>
                <div className="flex">
                    <SearchBar />
                </div>
            </div>
            <h1 className="text-2xl font-bold mb-4 mt-8">
                Search Results for "{query}"
            </h1>
            <p className="text-gray-700 mb-4">
                {totalResults} result{totalResults !== 1 ? 's' : ''} found from{' '}
                {searchData.length} items.
            </p>
            <p className="text-gray-500 mb-4">
                Search completed in {searchTime} ms.
            </p>
            {totalResults > 0 ? (
                <div>
                    <ul>
                        {visibleResults.map((result, index) => (
                            <li key={index} className="mb-4">
                                <a
                                    href={result.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 visited:text-purple-600 hover:underline underline-offset-4"
                                >
                                    <h2 className="text-xl font-semibold">
                                        {result.title}
                                    </h2>
                                </a>
                                <p className="text-gray-600">
                                    {result.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} /> Previous
                        </button>
                        <span className="text-gray-700">
                            Page {currentPage} of{' '}
                            {Math.ceil(totalResults / ITEMS_PER_PAGE)}
                        </span>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={
                                currentPage * ITEMS_PER_PAGE >= totalResults
                            }
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                        >
                            Next <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            ) : (
                <p>No results found for "{query}".</p>
            )}
        </div>
    )
}

export default SearchResults
