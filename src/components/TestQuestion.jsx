import React, { Component } from 'react'
import styles from "../styles/components/testQuestion.module.scss"

export class TestQuestion extends Component {
  constructor(props) {
    super(props)
    this.addAnswer = this.addAnswer.bind(this)
    this.state = {
      userAnswers: [],
      time: props.time
    }
  }

  addAnswer(e) {
    this.setState((prev) => {
      prev.userAnswers[this.props.questionId - 1] = e.target.value
      return prev
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionId !== this.props.questionId) {
      document.querySelectorAll("input").forEach((input)=> {
        input.checked = this.state.userAnswers[this.props.questionId - 1] === input.value
      })
    }

    if (this.state.time <= 0) {
      this.props.stopQuiz(this.state.userAnswers)
    }
  }

  componentDidMount() {
    console.log("mounted")
    this.indervalId = setInterval(() => {
      this.setState((prev) => ({...prev, time: prev.time - 1}))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.indervalId)
  }

  render() {
    return (
      <div className={styles.question}>
        <p>Time: {this.state.time}</p>
        <h2>
            Question #{this.props.questionId}: {this.props.questionText}
        </h2>
        <ul>
            {this.props.answers.map((answer, index) => (
                <li key={index}>
                    <input
                        onChange={this.addAnswer} 
                        type="radio" 
                        name="answer" 
                        value={answer}
                        id={`answer${index + 1}`} 
                    />
                    <label htmlFor={`answer${index + 1}`}>{answer}</label>
                </li>
            ))}
        </ul>
        <div>
          <button 
            className={styles.btn}
            onClick={() => this.props.previousQuestion()}
            disabled={this.props.questionId === 1}
          >
            Previous
          </button>
          <button
            onClick={() => this.props.nextQuestion()} 
            className={styles.btn}
            disabled={this.props.questionId === this.props.count}
          >
            Next
          </button>

          <button
            onClick={() => this.props.stopQuiz(this.state.userAnswers)} 
            className={styles.btn}
          >
            Stop quiz
          </button>
        </div>
        <progress
          value={this.state.userAnswers.length}
          max={this.props.count}        
        >
        </progress>
      </div>
    )
  }
}

export default TestQuestion