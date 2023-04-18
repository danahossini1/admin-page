import './App.css';
import { routes } from './router'
import { useRoutes } from 'react-router-dom';
import TopNav from './component/TopNav/TopNav';
import Sidbar from './component/Sidbar/Sidbar';

function App() {

  let routs = useRoutes(routes)
  return (
    <div className='admin-page'>
      <TopNav />
      <div className='contaner'>
        <Sidbar />
        {routs}
      </div>
    </div>

  );
}

export default App;
