import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TestQuestion from './components/TestQuestion.jsx'
import StartQuiz from './components/StartQuiz.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizStarted: false,
      questionNumber: 0
    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  quiz1 = {
    quizName: "HTML test",
    quizDescription: "Test 8 - 12",
    questions: [
      {
        questionId: 1,
        questionText: "Вкажіть тег заголовку?",
        answers: ["p", "h1", "img", "span"],
        correctAnswer: "h1"
      },
      {
        questionId: 2,
        questionText: "Вкажіть тег параграфа?",
        answers: ["p", "h1", "img", "span"],
        correctAnswer: "p"
      },
      {
        questionId: 3,
        questionText: "Вкажіть тег зображення?",
        answers: ["p", "h1", "img", "span"],
        correctAnswer: "img"
      },

    ]
  }

  startQuiz() {
    this.setState({
      isQuizStarted: true
    })
  }

  render() {
    return (
      <>
        <Header />
        {this.state.isQuizStarted ? (
          <TestQuestion
            questionId={
              this.quiz1.questions[this.state.questionNumber]
              .questionId
            }
            questionText={
              this.quiz1.questions[this.state.questionNumber]
              .questionText
            }
            answers={
              this.quiz1.questions[this.state.questionNumber]
              .answers
            }
            correctAnswer={
              this.quiz1.questions[this.state.questionNumber]
              .correctAnswer
            }
          />
        ) : (
          <StartQuiz
            name={this.quiz1.quizName}
            description={this.quiz1.quizDescription}
            startQuiz={this.startQuiz}
          />
        )}
        <Footer />
      </>
    )
  }
}

export default App