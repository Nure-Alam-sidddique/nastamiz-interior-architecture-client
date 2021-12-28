import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Footer/Footer';
import InitializationAuthentication from './Firebase/firebase.init';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Scroll from './Components/Scroll/Scroll';
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop';
import {Provider} from 'react-redux';
import store from './redux/store';
import ProductDetails from './Components/Home/Products/ProductDetails/ProductDetails';
InitializationAuthentication();
function App() {
  document.title="Nastamiz Interior";
  return (
    <div>
      <Provider store={store}>
      <Router>
        {/* <Scroll/> */}  
       <Header></Header>
       <Routes>
         <Route exact path='/' element={<Home/> }/>
         <Route path="/service/:serviceId" element={<ProductDetails/>}/>
       </Routes>
       </Router>
       <Footer></Footer>
       <ScrollToTop/>
       </Provider>
    </div>
  );
}

export default App;
