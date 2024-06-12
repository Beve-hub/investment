import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OverView from './pages/dashboard/overview/OverView';
import Transaction from './pages/dashboard/Transaction/Transaction';
import Profile from './pages/dashboard/settings/Profile';
import SideBar from './layout/SideBar';
import Package from './pages/dashboard/Packages/Package';
import Navbar from './layout/Navbar';
import NavbarWrapper from './context/NavbarWrapper';
import Home from './pages/landingPage/Hero screen/Home';
import About from './pages/landingPage/about/About';
import Strategies from './pages/landingPage/strategies/Strategies';
import Team from './pages/landingPage/team/Team';
import BodyDetails from './pages/landingPage/team/screen/BodyDetails';
import Contact from './pages/landingPage/contact/Contact';
import Resource from './pages/landingPage/resources/Resource';
import Login from './pages/auth/login/Login';
import Invest from './pages/auth/register/Invest';
import ValidId from './pages/auth/register/ValidId';




function App() {


  return (
    <Router>
      <NavbarWrapper>
      <Navbar/>
      <SideBar/>
      </NavbarWrapper>      
        <Routes>
        <Route index element={<Home/>}/>
          <Route path='overview' element={<OverView/>}/>
          <Route path='transaction' element={<Transaction/>}/>
           <Route path='package' element={<Package/>}/>
          <Route path='setting' element={<Profile/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='/strategies' element={<Strategies/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/bodyDetails' element={<BodyDetails/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resource' element={<Resource/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Invest/>}/>
          <Route path='/validId' element={<ValidId/>}/>
          <Route path='/packageForm' element={<PackageForm/>}/>
        </Routes>
    </Router>
  )
}

export default App
