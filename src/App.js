import './App.css';
import {routes} from './router'
import { useRoutes } from 'react-router-dom';

function App() {

  let routs=useRoutes(routes)
  return (
    <>
    <h1 style={{textAlign:'center'}}>Hello,World</h1>
    {routs}
    </>
  
  );
}

export default App;
