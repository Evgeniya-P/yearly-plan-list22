
import './App.css';
import image from './pencil.jpg'
import { PlanList } from './PlanList';


function App() {
  return (
    <div className="App">
      <div>



      </div>
      <div className='container title'>
        <h1>Yearly Planning</h1>

      </div>

      <PlanList />

      <div className='container'>
        
        {/* <h4>Success doesn't come to you. You go to it!</h4> */}
      </div>
      

      <div className='text'>

        <h6>Success doesn't come to you. You go to it!</h6>

        <img src = { image } className='pic'  alt = "pencil"/>

      </div>
     
     
     
    </div>
  );
}

export default App;
