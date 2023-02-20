import { useState} from 'react';
import './Components/assets/css/main.css';
import Header from './Components/NoteComponents/Header';
import Notes from './Components/NoteComponents/Notes';
import Search from './Components/NoteComponents/Search';
const App = () =>{
  const [darkMode, setDarkMode] = useState(true);
  const [searchText, setSearchText] = useState('');
  return (
    <div className={`${darkMode ? 'dark-mode main' : 'light-mode main'}`}>
      <div className='container__main'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <Notes query={searchText}/>
      </div>
    </div>
  );
}

export default App;
