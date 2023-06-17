import React from 'react'
import './App.css';
import Header from './components/header/Header';
import Quiz from './components/quiz/Quiz'
import Footer from './components/footer/Footer';


const App = () => {
  return (

    <div className="background ">
      <div className='blur'>
        <Header />
        <Quiz />

      </div>
      <Footer />
    </div>
  )
}

export default App
