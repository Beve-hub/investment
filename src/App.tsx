import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverView from './pages/dashboard/overview/OverView';
import Transaction from './pages/dashboard/Transaction/Transaction';
import Wallet from './pages/dashboard/wallet/Wallet';
import Profile from './pages/dashboard/settings/Profile';
import SideBar from './layout/SideBar';
import Package from './pages/dashboard/Packages/Package';



function App() {


  return (
    <Router>

      <SideBar/>
        <Routes>
          <Route path='overview' element={<OverView/>}/>
          <Route path='transaction' element={<Transaction/>}/>
          <Route path='wallet' element={<Wallet/>}/>
          <Route path='package' element={<Package/>}/>
          <Route path='settings' element={<Profile/>}/>
        </Routes>
    </Router>
  )
}

export default App
