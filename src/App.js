import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Book from './components/Book';
import Signin from './components/Signin';


function App() {

  return (

    <div className='App'>
  
      <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/home/signin' component={Signin} />
            <Route path='/book' component={Book} />
      </Switch>

    </div>
  )
}

export default App;
