import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import InitializationAuthentication from './Firebase/firebase.init';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
// import Scroll from './Components/Scroll/Scroll';
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop';
InitializationAuthentication();
function App() {
  document.title="Nastamiz Interior";
  return (
    <div>
      <Router>
        {/* <Scroll/> */}
       <Header/>
       <Home/>
       <Footer/>
       </Router>
       <ScrollToTop/>
    </div>
  );
}

export default App;
