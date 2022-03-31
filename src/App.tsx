import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import SubdomainsPage from './pages/SubdomainsPage/SubdomainsPage';
import SubdirectoriesPage from "./pages/SubdirectoriesPage/SubdirectoriesPage";
import NotesPage from './pages/NotesPage/NotesPage';

const App = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>        
      {/* <SubdomainsPage /> */}
      {/* <SubdirectoriesPage subdomain="news.defense.gov" /> */}
      <NotesPage subdomain="bounty.defense.com" subdirectory="/hackerone"></NotesPage>
    </div>
  )
}

export default App;
