import React, {lazy,  Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadingSuspense from './pages/LoadingSuspense';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = lazy(() => import('./App'));
const GenerateUrl = lazy(() => import('./pages/GenerateUrl'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Suspense fallback={<LoadingSuspense />}>
    <BrowserRouter>
      <Routes>
        <Route path='/:nama' element={<App />} />
        <Route path='/generate' element={<GenerateUrl />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
