import './App.css';
import Banner from './Components/Banner';
import Display from './Components/Display';
import Display2 from './Components/Display2';
import Footer from './Components/Footer';
import Gift from './Components/Gift';
import Header from './Components/Header';
import LeftDisplay from './Components/LeftDisplay';
import LeftDisplay2 from './Components/LeftDisplay2';
import Navber from './Components/Navber';
import Product from './Components/Product';
// import Products from './Components/Products';
import RightDisplay from './Components/RightDisplay';
import RightDisplay2 from './Components/RightDisplay2';

function App() {
  return (
    <div>
      <Header/>
      <Navber/>
      <Banner/>
      {/* <Products/> */}
      <Product/>
      <Display/>
      <Gift/>
      <Display2/>
      <RightDisplay />
      <LeftDisplay />
      <RightDisplay2/>
      <LeftDisplay2/>
      <Footer/>
    </div>
  );
}

export default App;
