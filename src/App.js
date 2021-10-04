
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import OurTeam from './components/OurTeam/OurTeam';
import Instructors from './components/Instructors/Instructors';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route path='/ourteam'>
            <OurTeam></OurTeam>

          </Route>
          <Route path='/instructor'>
            <Instructors></Instructors>
          </Route>
          {/* <Route exact path='/services/:servicesKey'>
            <CourseDetails></CourseDetails>
          </Route> */}
          <Route path=''>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
