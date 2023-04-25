import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import LoadingBar from 'react-top-loading-bar'

const App = () =>{

  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  const setNewProgress = (progress) => {
    setProgress(progress);
  }

    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/about' element={<About/>} />       
          <Route exact path='/' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>} />       
          <Route exact path='/general' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="general" pageSize={6} country="in" category="general"/>} />       
          <Route exact path='/business' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="business" pageSize={6} country="in" category="business"/>} />       
          <Route exact path='/entertainment' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="entertainment" pageSize={6} country="in" category="entertainment"/>} />       
          <Route exact path='/health' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="health" pageSize={6} country="in" category="health"/>} />       
          <Route exact path='/science' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="science" pageSize={6} country="in" category="science"/>} />       
          <Route exact path='/sports' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="sports" pageSize={6} country="in" category="sports"/>} />       
          <Route exact path='/technology' element={<News setNewProgress={setNewProgress} apiKey={apiKey} key="technology" pageSize={6} country="in" category="technology"/>} />       
        </Routes>
        </Router>      
      </div>

    )
  }


export default App