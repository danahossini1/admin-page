import './App.css';
import { routes } from './router'
import { useRoutes } from 'react-router-dom';
import TopNav from './component/TopNav';

function App() {

  let routs = useRoutes(routes)
  return (
    <>
      <TopNav />
      {routs}
    </>

  );
}

export default App;
