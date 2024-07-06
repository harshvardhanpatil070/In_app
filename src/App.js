import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import GameRules from './components/GameRules';
import DownloadLink from './components/DownloadLink';
import MainApp from './components/Screen/MainApp';
import SwiperComp from './components/Swipe/SwiperComp';


function App() {
  return (
    <div >
      <Header></Header>
      <Home></Home>
      <GameRules></GameRules>
      <DownloadLink></DownloadLink>
   
    
      <About></About>
     
      <Footer></Footer>
      
     
    </div>
  );
}

export default App;
