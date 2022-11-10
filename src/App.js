import { useState, lazy, Suspense } from 'react';
import './App.css';
import LoadingSuspense from './pages/LoadingSuspense';
const Main = lazy(() => import('./pages/Main'));
const Opening = lazy(() => import('./pages/Opening'));

function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <Suspense fallback={<LoadingSuspense />}>
      {isOpen ? 
        (<Main />) :
        (<Opening isOpen={isOpen} setisOpen={(e) => setisOpen(e)} />) 
      }
      </Suspense>
    </>
  );
}

export default App;
