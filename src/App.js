import React, {Component }from 'react';
import Appbar from './components/Appbar'
import GetStarted from './components/GetStarted'
import Login from './components/Login'
import Signup from './components/Signup'; 
import Homepage from './components/Homepage'
import Classes from './components/Classes'
import ClassesWeek from './components/ClassesWeek';
import LoginSignup from './components/LoginSignup'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          {/*Starting page*/}
          <Route path="/" component={Login} exact/>

          {/*Sign up page*/}
          <Route path="/signup" component={Signup}/>

          {/*Home page*/}
          <Route path="/home" component={Homepage}/>

          {/*Classes page*/}
          <Route path="/myclasses" component={Classes}/>

          {/*ClassesWeek page, need to render it dynamically*/}
          <Route path="/week1" component={ClassesWeek}/>

          {/*Recently viewed page*/}
          <Route path="/recent" component={Classes}/>

          {/*Favourites page*/}
          <Route path="/favourites" component={ClassesWeek}/>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
