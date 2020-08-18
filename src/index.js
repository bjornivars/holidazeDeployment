import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Home from './pages/User/Home';
import AllHotels from './pages/User/AllHotels';
import HotelSpecific from './pages/User/HotelSpecific';
import Contact from './pages/User/Contact';

import AdminHome from './pages/Admin/AdminHome';
import Enquiries from './pages/Admin/Enquiries';
import ContactMessages from './pages/Admin/ContactMessages';
import NewEstablishment from './pages/Admin/NewEstablishment';

import ScrollToTop from './components/scrollToTop';

import Navbar from './components/User/navbar';

const NoPage = () => {
  return (
    <>
      <Navbar />
      <div className=" [ pageNotFound col-12 col-t-12 col-m-12 ] ">
        <img className=" [ pageNotFound-img ] " src={require("./Assets/404.png")} alt="404 - page not found" />
      </div>
    </>
  );
};


ReactDOM.render(
  <Router>
    <App>
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/allHotels' exact component={AllHotels} />
        <Route path='/hotelSpecific/:id/' exact component={HotelSpecific} /> }
        <Route path='/contact' exact component={Contact} />

        <Route path='/adminHome' exact component={AdminHome} />
        <Route path='/enquiries' exact component={Enquiries} />
        <Route path='/contactMessages' exact component={ContactMessages} />
        <Route path='/newEstablishment' exact component={NewEstablishment} />

        <Route component={NoPage} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
