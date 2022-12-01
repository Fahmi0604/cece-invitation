import { useEffect, useState, lazy} from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
const Main = lazy(() => import('./pages/Main'));
const Opening = lazy(() => import('./pages/Opening'));

function App() {
  
  const { nama } = useParams();
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      {isOpen ? 
        (<Main />) :
        (<Opening nama={nama} isOpen={isOpen} setisOpen={(e) => setisOpen(e)} />) 
      }
    </>
  );
}

export default App;
