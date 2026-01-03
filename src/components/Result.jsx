import React, { Component } from 'react'
import styles from "../styles/components/result.module.scss"

export class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correctCount: 0
    }
  }

  componentDidMount() {
    this.props.info.questions.forEach((question, i) => {
      question.correctAnswer === this.props.result[i] &&
        this.setState((prev) => ({
          correctCount: prev.correctCount + 1
        }))
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <h2>{this.props.info.quizName}</h2>
        <p>
          Result: {this.state.correctCount} / {this.props.info.questions.length}
        </p>
        <div>
          {this.props.info.questions.map((question, i) => (
              <div key={i}>
                {question.questionText}
                <ul>
                  {question.answers.map((answer, j) => (
                    <li 
                      key={j}
                      className={this.props.result[i] === answer && 
                        question.correctAnswer === answer
                        ? styles.correct
                        : this.props.result[i] === answer && 
                        question.correctAnswer !== answer
                        ? styles.wrong
                        : ""
                      }
                    >
                      {answer}
                    </li>
                  ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
        <button className={styles.btn} onClick={this.props.tryAgain}>Try again</button>
      </div>
    )
  }
}

export default Result