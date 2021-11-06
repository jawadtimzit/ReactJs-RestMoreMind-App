import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Topsmallboxes from './components/Topsmallboxes';
import Contactus from './components/Contactus';
import Calender from './components/Calender';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Aboutus from './components/Aboutus';
import Meditation from './components/Meditation';
import Fitness from './components/Fitness';
import Sleep from './components/Sleep';
import Quotes from './components/Quotes';
import Filtering from './components/Filtering';
import Treelist from './components/Treelist';






function App() {
  return (
    <div> 
      <Router>
        
        <Link to="/pages/contactus"></Link>
        <Link to= "/"></Link>
        <Link to = "/pages/signin"></Link>
        <Link to = "/pages/signup"></Link>
        <Link to = "/aboutus"></Link>
        <Link to = "/meditation"></Link>
        <Link to = "/fitness"></Link>
        <Link to = "/sleep"></Link>
        <Link to = "/quotes"></Link>
        <Link to = "/treehouses"></Link>
        
        
        




        <Header/> {/*return header componenet in the pages everytime*/}
        
        <Switch>
          {/*routing for the pages /  components */}
          <Route path="/pages/contactus" component={Contactus}></Route>
          <Route path ="/pages/signin" component = {Signin}></Route>
          <Route path = "/pages/signup" component ={Signup}></Route>
          <Route path = "/aboutus" component ={Aboutus}></Route>
          <Route path = "/meditation" component ={Meditation}></Route>
          <Route path = "/fitness" component ={Fitness}></Route>
          <Route path = "/sleep" component ={Sleep}></Route>
          <Route path = "/quotes" component ={Quotes}></Route>
          <Route path = "/treehouses" component ={Treelist}></Route>
          
        
          
          
          <div>
            <Route path="/" component={Topsmallboxes}></Route>
            {/*<Treereservation/>*/}
            <div>
              <Filtering/>
              

            </div>
            
          </div>
        </Switch>
        
       
          
           
        <Treelist/> 
          
        <Sidebar/> {/*return the side bar everytime*/}
      
        <Footer/>
      </Router>
      
    </div> 
    
      
          
          
        
      
    
    
  );
}

export default App;
