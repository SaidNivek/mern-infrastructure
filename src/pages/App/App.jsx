import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrder/NewOrderPage';
import AuthPage from '../Auth/AuthPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <main className="App">
      { user ?
        <>
        <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />}></Route>
            <Route path="/orders" element={<OrderHistoryPage />}></Route>
          </Routes>
        </>
        :
        <AuthPage />
      }
    </main>
  );
}

export default App;
