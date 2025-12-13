import React, { Component } from 'react'

export class TestQuestion extends Component {
  render() {
    return (
      <div className='question'>
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
      </div>
    )
  }
}

export default TestQuestion