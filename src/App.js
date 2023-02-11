import './App.css';
import { routes } from './router'
import { useRoutes } from 'react-router-dom';
import TopNav from './component/TopNav/TopNav';
import Sidbar from './component/TopNav/Sidbar/Sidbar';

function App() {

  let routs = useRoutes(routes)
  return (
    <>
      <TopNav />
      <div className='contaner'>
        <Sidbar />
        {routs}
      </div>

    </>

  );
}

export default App;
