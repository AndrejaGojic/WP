import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='/register' element= {<Register/>}/>
                <Route path='/login' element= {<Login/>}/>
               </Routes>
            </div>
        </Router>
    );
};

export default App;