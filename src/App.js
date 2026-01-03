import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import TestQuestion from './components/TestQuestion.jsx'
import StartQuiz from './components/StartQuiz.jsx'
import Result from './components/Result.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isQuizStarted: false,
      showResults: false,
      questionNumber: 0,
      userAnswers: []
    }
    this.startQuiz = this.startQuiz.bind(this)
    this.stopQuiz = this.stopQuiz.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.previousQuestion = this.previousQuestion.bind(this)
    this.tryAgain = this.tryAgain.bind(this)
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

    ],
    time: 300
  }

  nextQuestion() {
    if (this.state.questionNumber !== this.quiz1.questions.length - 1) {
      this.setState({
        questionNumber: this.state.questionNumber + 1
      })
    }
  }

  previousQuestion() {
    if (this.state.questionNumber > 0) {
      this.setState({
        questionNumber: this.state.questionNumber - 1
      })
    }
  }

  startQuiz() {
    this.setState({
      isQuizStarted: true
    })
  }

  stopQuiz(answers) {
    this.setState({
      isQuizStarted: false,
      userAnswers: answers,
      showResults: true
    })
  }

  tryAgain() {
    this.setState({
      isQuizStarted: false,
      showResults: false,
      questionNumber: 0,
      userAnswers: []
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
            count={this.quiz1.questions.length}
            time={this.quiz1.time}
            nextQuestion={this.nextQuestion}
            previousQuestion={this.previousQuestion}
            stopQuiz={this.stopQuiz}
          />
        ):this.state.showResults ? (
          <Result 
            name={this.quiz1.quizName}
            result={this.state.userAnswers.length}
            count={this.quiz1.questions.length}
            tryAgain={this.tryAgain}
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