import './App.css';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom"; 
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import Contact from './Pages/Contact/Contact';
import School from './Pages/School/School';
import Lawn from './Pages/Lawn/Lawn';
import Hospital from './Pages/Hospital/Hospital';
import Event from './Pages/Event/Event';
import EventPage from './Pages/Event/EventPage/EventPage';

function App() {
return (
<div className="App">
 <Router>
 <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/about' element={<About/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/event' element={<Event/>}/>
 <Route path='/event/:ids' element={<EventPage/>}/>


 <Route path='/school' element={<School/>}/>
 <Route path='/lawn' element={<Lawn/>}/>
 <Route path='/hospital' element={<Hospital/>}/>

 <Route path='*' element={<Error/>}/>
</Routes>
 </Router>
</div>
);
}

export default App;
