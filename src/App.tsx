import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import SubdomainsPage from './pages/SubdomainsPage/SubdomainsPage';

const App = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>        
      <SubdomainsPage />
    </div>
  )
}

export default App;
