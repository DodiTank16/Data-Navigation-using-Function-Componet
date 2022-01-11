import './App.css';
// import FunctionTwo from './Components/FunctionTwo';
import { Route, BrowserRouter , Routes } from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (  
    <div>
      {/* <Fun1 name="Dodi" />
      <Fun1 name="Utasa" />
      <Fun1 name="Dimitri" /> */}
      {/* <FunctionTwo/> */}

    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          {/* <MyProvider> */}
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<ContactUs/>} />
          {/* </MyProvider> */}
        </Routes>
      <Footer/>
    </div>

  </BrowserRouter>
  

    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
