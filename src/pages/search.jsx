import SearchBar from "../components/Searchbar";

function Search() {
    return (
        <div className="App">
            <div className='flex flex-col gap-4 justify-center content-center h-[100vh]'>
                <img className='mx-auto w-3/12' src='banner.gif' alt="banner" />
                <SearchBar />
            </div>
        </div>
    );
}

export default Search;
