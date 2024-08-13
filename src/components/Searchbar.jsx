import React, { useState } from 'react'
import searchData from '../data/fake-database'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [isFocused, setIsFocused] = useState(false)
    const [rememberedSuggestions, setRememberedSuggestions] = useState([])
    const [highlightedIndex, setHighlightedIndex] = useState(-1)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value
        setQuery(value)
        setHighlightedIndex(-1)

        if (value.length > 0) {
            let filteredSuggestions = searchData.filter((item) =>
                item.title.toLowerCase().startsWith(value.toLowerCase())
            )

            const prioritizedSuggestions = [
                ...rememberedSuggestions.filter((item) =>
                    item.title.toLowerCase().startsWith(value.toLowerCase())
                ),
                ...filteredSuggestions.filter(
                    (item) =>
                        !rememberedSuggestions.some(
                            (remembered) => remembered.title === item.title
                        )
                ),
            ]

            setSuggestions(prioritizedSuggestions)
        } else {
            setSuggestions([])
        }
    }

    const handleSuggestionClick = (suggestion) => {
        navigate(`/search/${suggestion.title.toLowerCase()}`)
        setQuery('')
        setSuggestions([])

        if (
            !rememberedSuggestions.some(
                (item) => item.title === suggestion.title
            )
        ) {
            setRememberedSuggestions((prev) => [...prev, suggestion])
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setHighlightedIndex(
                (prevIndex) => (prevIndex + 1) % suggestions.length
            )
        } else if (e.key === 'ArrowUp') {
            setHighlightedIndex((prevIndex) =>
                prevIndex === 0 ? suggestions.length - 1 : prevIndex - 1
            )
        } else if (e.key === 'Enter') {
            e.preventDefault()

            if (highlightedIndex >= 0) {
                handleSuggestionClick(suggestions[highlightedIndex])
            } else if (query.trim()) {
                navigate(`/search/${query.trim().toLowerCase()}`)
            }

            setQuery('')
        }
    }

    const handleRemoveRemembered = (title) => {
        setRememberedSuggestions((prev) =>
            prev.filter((item) => item.title !== title)
        )
    }

    const handleClear = () => {
        setQuery('')
        setSuggestions([])
    }

    return (
        <div className="relative w-72 mt-4 mx-auto">
            <div className="relative">
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search..."
                    className={`transition-all ease-in-out w-full pl-10 pr-10 py-2 border border-gray-300 focus-visible:border-blue-500 focus:outline-none ${
                        suggestions.length > 0 && isFocused
                            ? 'rounded-t-lg'
                            : 'rounded-[20px]'
                    }`}
                    autoFocus={true}
                />
                {query.length > 0 && (
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        onMouseDown={handleClear}
                    />
                )}
            </div>
            {suggestions.length > 0 && isFocused && (
                <ul className="absolute w-full max-h-80 overflow-y-auto rounded-b-lg border border-t-0 border-gray-300 shadow-lg bg-white mt-1 z-10">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onMouseDown={() =>
                                handleSuggestionClick(suggestion)
                            }
                            className={`cursor-pointer p-2 flex items-center ${
                                rememberedSuggestions.some(
                                    (item) => item.title === suggestion.title
                                )
                                    ? 'text-purple-600'
                                    : ''
                            } ${
                                index === highlightedIndex
                                    ? 'bg-gray-200'
                                    : 'hover:bg-gray-100'
                            }`}
                        >
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="mr-2 text-gray-400"
                            />
                            <strong>{suggestion.title}</strong>
                            {rememberedSuggestions.some(
                                (item) => item.title === suggestion.title
                            ) && (
                                <FontAwesomeIcon
                                    icon={faTimesCircle}
                                    className="ml-auto text-gray-400 hover:text-red-500"
                                    onMouseDown={(e) => {
                                        e.stopPropagation()
                                        handleRemoveRemembered(suggestion.title)
                                    }}
                                />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBar
