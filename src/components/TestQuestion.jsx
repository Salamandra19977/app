import React, { Component } from 'react'
import styles from "../styles/components/testQuestion.module.scss"

export class TestQuestion extends Component {
  render() {
    return (
      <div className={styles.question}>
        <h2>
            Question #{this.props.questionId}: {this.props.questionText}
        </h2>
        <ul>
            {this.props.answers.map((answer, index) => (
                <li key={index}>
                    <input 
                        type="radio" 
                        name="answer" 
                        value={answer}
                        id={`answer${index + 1}`} 
                    />
                    <label htmlFor={`answer${index + 1}`}>{answer}</label>
                </li>
            ))}
        </ul>
        <button className={styles.btn}>Submit</button>
      </div>
    )
  }
}

export default TestQuestion