import React, { Component } from 'react'
import styles from "../styles/components/footer.module.scss"

export class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>&copy; Robocode {new Date().getFullYear()}</div>
    )
  }
}

export default Footer