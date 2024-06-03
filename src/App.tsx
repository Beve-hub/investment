import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverView from './pages/dashboard/overview/OverView';
import Packages from './pages/dashboard/Packages/Packages';
import Transaction from './pages/dashboard/Transaction/Transaction';
import Wallet from './pages/dashboard/wallet/Wallet';
import Profile from './pages/dashboard/settings/Profile';
import SideBar from './layout/SideBar';

function App() {


  return (
    <Router>

      <SideBar/>
        <Routes>
          <Route path='overview' element={<OverView/>}/>
          <Route path='package' element={<Packages/>}/>
          <Route path='transactions' element={<Transaction/>}/>
          <Route path='wallet' element={<Wallet/>}/>
          <Route path='settings' element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default App
