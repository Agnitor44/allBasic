
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from './home'
import Note from './Note'
import Memory from './Memory'
import List from './List'
import Weather from './Weather'
import Currency from './Currency'

function App() {
  return (
    <Router>
        <header>
        <NavLink  to = '/'> <h1>All Basic</h1></NavLink>
        </header>
     <section className = 'page'>
      <Route exact path  = '/' component = {Home}/>
      <Route exact path = '/note' component = {Note}/>
      <Route exact path = '/memory' component = {Memory}/>
      <Route exact path = '/list' component = {List}/>
      <Route exact path = '/weather' component = {Weather}/>
      <Route exact path = '/currency' component = {Currency}/>
     </section>

    </Router>
        
  );
}

export default App;
