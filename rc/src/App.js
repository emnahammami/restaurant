
import './App.css';
import Pp from "./Component/Profile/ProfilePhoto"
import Fn from "./Component/Profile/FullName"
import Ad from "./Component/Profile/Address"
import Ftr from "./Component/Profile/Footer"
function App() {
  return (<div className='Ap'>
    <header><Pp/>
    <div className='reseignement'><h1><Fn/></h1><h2><Ad/></h2></div>
    
    </header>
    
     
     <div className='info'><div className='footer'><Ftr/></div></div>
     
    </div>
  );
}

export default App;
