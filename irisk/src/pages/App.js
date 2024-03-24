import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (

    <div className='welcome text-center'>

      <h1 className='text-white pb-5'>iRisk</h1>
      <h3 className='text-white'>Vendor Relationship Risk Calculator</h3>
      <Link to='/Questions/debut' className='btn btn-outline-primary my-5'>Get Started</Link>

    </div>

  );
}

export default App;
