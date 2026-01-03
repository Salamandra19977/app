import React, { Component } from 'react'
import styles from "../styles/components/result.module.scss"

export class Result extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>{this.props.name}</h2>
        <p>
          Result: {this.props.result} / {this.props.count}
        </p>
        <button className={styles.btn} onClick={this.props.tryAgain}>Try again</button>
      </div>
    )
  }
}

export default Result