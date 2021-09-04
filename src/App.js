
import React,{ Component }  from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import './css/css/style.css'
import './css/css/exceptions.css'
import './css/css/media.css'
import './css/css/fontawesome.min.css'
import './css/css/fonts.css'
import './css/css/all.css'

// import createStore from 'redux';

function App() {
 return (
  <div className="main"> 
   <Header />
   <Content />
   <Footer />
   </div>

 );
}

export default App;
