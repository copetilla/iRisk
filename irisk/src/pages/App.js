import '../App.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firstQ from './questions/1';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  useEffect(() => {

    document.body.classList.add('animate-in');
    return () => {
      document.body.classList.remove('animate-in');
    };
  }, []);
  return (
    <Router>
      <div className='welcome text-center'>

        <h1 className='text-white pb-5'>iRisk</h1>
        <h3 className='text-white'>Vendor Relationship Risk Calculator</h3>
        <Link to="/other-component">
          <button className='btn btn-outline-primary my-5'>Get Started</button>
        </Link>
        <button className='btn btn-outline-primary my-5'>Get Started</button>

      </div>

      <Switch>
        <Route path="/firstQ" component={firstQ} />

      </Switch>
    </Router>


  );
}

export default App;
