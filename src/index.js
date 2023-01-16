import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <StoreProvider store={store}>
      <Routes>
       <Route path="/*"  element={<App/>}  />
       </Routes>
       </StoreProvider>
    </Router>
    {/* <App/> */}
  </React.StrictMode>
);


