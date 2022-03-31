import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import SubdomainsPage from './pages/SubdomainsPage/SubdomainsPage';
import SubdirectoriesPage from "./pages/SubdirectoriesPage/SubdirectoriesPage";

const App = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>        
      {/* <SubdomainsPage /> */}
      <SubdirectoriesPage subdomain="news.defense.gov" />
    </div>
  )
}

export default App;
