import SearchIcon from '@mui/icons-material/Search';
const Search = ({handleSearchNote}) =>{
    return(
        <div className="search">
            <SearchIcon className='search__icons'/>
            <input type="text" placeholder="Type to Search..." onChange={(event) => handleSearchNote(event.target.value)} />
        </div>
    )
}

export default Search