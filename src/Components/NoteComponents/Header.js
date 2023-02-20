const Header = ({handleToggleDarkMode}) =>{
    return(
        <div className="header">
            <h1 className="notes__title"> Notes </h1>
            <button onClick={()=>handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="note__save"> Toggle Mode</button>
        </div>
    )
}
export default Header