import React from 'react';
import photo from './photo.png';
import './App.css';
import Header from './components/Header';
import HomeTabs from './components/HomeTabs';
import Footer from './components/Footer';


function App() {
  return (
    <div>
       
    <div className="app">
      <header className="app-header">
        <img src={photo}  
           className="app-logo" alt="logo" 
          />
        <Header />
      </header>
      <HomeTabs />
     
      </div>
      <Footer/>
   
    </div>
    
  );
}

export default App;
