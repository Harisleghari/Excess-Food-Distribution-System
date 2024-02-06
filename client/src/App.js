import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import HeaderUser from './components/headerUser';
import Footer from './components/footer';
import Home from './Pages/home';
import DonerPage from './Pages/donerPage';
import Login from './Pages/login';
import Signup from './Pages/signup';
import Donation from './Pages/donationPage';
import Accepter from './Pages/accepterPage';
import VolunteerPage from './Pages/volunteer';
import Accept from './Pages/acceptPage';
import Dashboard from './Pages/dashboard';
import Header from "./components/header";
import Profile from './layout/profile';
import Statistics from './layout/statistics';
import Badges from './layout/badges';


function App() {
  const isUserLoggedIn = !!localStorage.getItem("token");
  return (
    <div className="main">
      <Router>
        {isUserLoggedIn ? <HeaderUser /> : <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {isUserLoggedIn ? (
            <>
              <Route path="/doner" element={<DonerPage />} />
              <Route path="/donation" element={<Donation />} />
              <Route path="/accepter" element={<Accepter />} />
              <Route path="/volunteer" element={<VolunteerPage />} />
              <Route path="/accept" element={<Accept />} />
              <Route path="/dashboard/*" element={<Dashboard />}>
                <Route path={":"} component={<Profile />} />
                <Route path={":stats"} component={<Statistics />} />
                <Route path={":badges"} component={<Badges />} />
              </Route>
            </>
          ) : (
            <>
              <Route path="/doner" element={<Login />} />
              <Route path="/donation" element={<Login />} />
              <Route path="/accepter" element={<Login />} />
              <Route path="/volunteer" element={<Login />} />
              <Route path="/accept" element={<Login />} />
            </>
          )}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}


export default App;
