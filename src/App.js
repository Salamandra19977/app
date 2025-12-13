import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TestQuestion from './components/TestQuestion.jsx'

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div>App 2</div>
        <TestQuestion 
          questionId={1}
          questionText={"Хто каже мяв мяв?"}
          answers={["кіт", "собака", "папуга"]}
        />
        <Footer />
      </>
      
    )
  }
}

export default App